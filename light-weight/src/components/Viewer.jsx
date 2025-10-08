import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Plane, useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/arm26.gltf');
  return <primitive object={scene} />;
};

const Viewer = () => {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#808080" />
        </Plane>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Viewer;
