import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Grid, useGLTF, useAnimations } from '@react-three/drei';
import useStore from '../store/useStore';

const modelPaths = {
  squat: '/arm26_elbow_flex.gltf',
  bench: '/arm26.gltf',
  deadlift: '/arm26.gltf',
};

const Model = ({ url }) => {
  const { scene, animations } = useGLTF(url);
  const { setAnimations, setNumFrames, setCurrentAnimation } = useStore();
  const { ref, actions, names } = useAnimations(animations);

  useEffect(() => {
    setAnimations(animations);
    if (animations.length > 0) {
      setCurrentAnimation(animations[0].name);
      setNumFrames(animations[0].duration * 30); // Assuming 30 fps
    }
  }, [animations, setAnimations, setCurrentAnimation, setNumFrames]);

  const {
    isPlaying,
    animationSpeed,
    currentAnimation,
    currentFrame,
  } = useStore();

  useEffect(() => {
    if (currentAnimation && actions[currentAnimation]) {
      const action = actions[currentAnimation];
      if (isPlaying) {
        action.play();
      } else {
        action.paused = true;
      }
      action.timeScale = animationSpeed;
    }
  }, [isPlaying, animationSpeed, currentAnimation, actions]);

  useEffect(() => {
    if (currentAnimation && actions[currentAnimation]) {
      const action = actions[currentAnimation];
      action.time = currentFrame / 30; // Assuming 30 fps
    }
  }, [currentFrame, currentAnimation, actions]);

  return <primitive object={scene} ref={ref} />;
};

const Viewer = () => {
  const { selectedLift } = useStore();
  const modelPath = modelPaths[selectedLift];

  return (
    <div className="w-full h-full bg-gray-800 rounded-lg shadow-md">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} adjustCamera={false}>
            <Model url={modelPath} />
          </Stage>
        </Suspense>
        <Grid renderOrder={-1} position={[0, -0.5, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Viewer;
