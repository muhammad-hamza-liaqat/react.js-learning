import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
// import * as THREE from 'three';

const Earth = () => {
  const texture = useLoader(TextureLoader, '/a2.jpg');

  return (
    <mesh rotation={[0, 0, 0]}>
      {/* Set a larger radius to make the sphere bigger */}
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const HomePage = () => {
  return (
    <div style={{ height: '100vh', width: '100%', background: 'black' }}>
      {/* Set a black background for the Canvas */}
      <Canvas style={{ background: 'black' }}>
        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />

        {/* Render the Earth */}
        <Earth />

        {/* Enable OrbitControls for interaction and mouse rotation */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          autoRotate
          autoRotateSpeed={2}
          enableRotate={true}
        />

        {/* Background stars */}
        <Stars radius={100} depth={100} count={5000} factor={7} saturation={0} fade />
      </Canvas>
      {/* Centered text over the canvas */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '12px',
          textAlign: 'center',
        }}
      >
        Made with ❤️ by Hamza.
      </div>
    </div>
  );
};

export default HomePage;
