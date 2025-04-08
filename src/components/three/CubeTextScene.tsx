
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { Group } from 'three';

interface CubeTextProps {
  technology: string;
  position: [number, number, number];
  color?: string;
}

function CubeText({ technology, position, color = '#8B5CF6' }: CubeTextProps) {
  const mesh = useRef<Group>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
      mesh.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.2;
    }
  });

  return (
    <group ref={mesh} position={position}>
      <mesh castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      <Text
        position={[0, 0, 1.01]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {technology}
      </Text>
      <Text
        position={[0, 0, -1.01]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI, 0]}
      >
        {technology}
      </Text>
      <Text
        position={[1.01, 0, 0]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI / 2, 0]}
      >
        {technology}
      </Text>
      <Text
        position={[-1.01, 0, 0]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        rotation={[0, -Math.PI / 2, 0]}
      >
        {technology}
      </Text>
      <Text
        position={[0, 1.01, 0]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        rotation={[-Math.PI / 2, 0, 0]}
      >
        {technology}
      </Text>
      <Text
        position={[0, -1.01, 0]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        rotation={[Math.PI / 2, 0, 0]}
      >
        {technology}
      </Text>
    </group>
  );
}

export function CubeTextScene() {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <CubeText technology="MongoDB" position={[-4, 2, 0]} color="#4DB33D" />
      <CubeText technology="Express" position={[4, 2, 0]} color="#000000" />
      <CubeText technology="React" position={[-4, -2, 0]} color="#61DAFB" />
      <CubeText technology="Node.js" position={[4, -2, 0]} color="#3C873A" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
