
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera, Float, Text3D } from '@react-three/drei';
import { Vector3, Mesh, Group } from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

function Model() {
  const group = useRef<Group>(null);
  const mesh = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      mesh.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={mesh} position={[0, 0, 0]} castShadow receiveShadow>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#8B5CF6"
          metalness={0.5}
          roughness={0.2}
          emissive="#8B5CF6"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <torusGeometry args={[3, 0.2, 16, 100]} />
        <meshStandardMaterial 
          color="#0EA5E9" 
          metalness={0.7}
          roughness={0.2}
          emissive="#0EA5E9"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function Stars({ count = 100 }) {
  const positions = useRef<Array<Vector3>>([]);
  
  useEffect(() => {
    positions.current = Array.from({ length: count }, () => {
      return new Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
    });
  }, [count]);

  return (
    <group>
      {positions.current.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[0.05 + Math.random() * 0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
}

export function Scene() {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`canvas-container ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={isMobile ? 75 : 60} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Model />
        <Stars count={isMobile ? 50 : 200} />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          makeDefault 
        />
      </Canvas>
    </div>
  );
}
