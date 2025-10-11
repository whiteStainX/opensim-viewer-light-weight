import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Grid } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import useStore from '../store/useStore';

const modelPaths = {
  squat: '/arm26.gltf',
  bench: '/arm26.gltf',
  deadlift: '/arm26.gltf',
};

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

const Viewer = () => {
  const { selectedLift } = useStore();
  const modelPath = modelPaths[selectedLift];

  return (
    <div className="w-full h-full bg-gray-800 rounded-lg shadow-md">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
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
