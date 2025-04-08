
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Float, Text3D } from '@react-three/drei';
import { Vector3, Mesh, Group, Color } from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

function MernLogo() {
  const group = useRef<Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={group}>
      {/* MongoDB (Green sphere) */}
      <mesh position={[-2, 1, 0]} castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#4DB33D" 
          roughness={0.2} 
          metalness={0.8}
          emissive="#4DB33D"
          emissiveIntensity={0.2} 
        />
      </mesh>
      
      {/* Express (Black ring) */}
      <mesh position={[0, 1, 0]} castShadow>
        <torusGeometry args={[1, 0.2, 16, 100]} />
        <meshStandardMaterial 
          color="#000000" 
          roughness={0.1} 
          metalness={0.9}
          emissive="#333333"
          emissiveIntensity={0.1} 
        />
      </mesh>
      
      {/* React (Blue atom-like object) */}
      <group position={[2, 1, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial 
            color="#61DAFB" 
            roughness={0.2} 
            metalness={0.8}
            emissive="#61DAFB"
            emissiveIntensity={0.3} 
          />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <torusGeometry args={[0.8, 0.05, 16, 100]} />
          <meshStandardMaterial color="#61DAFB" />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[0.8, 0.05, 16, 100]} />
          <meshStandardMaterial color="#61DAFB" />
        </mesh>
      </group>
      
      {/* Node.js (Green hexagon) */}
      <mesh position={[0, -1, 0]} castShadow>
        <cylinderGeometry args={[1, 1, 0.3, 6]} />
        <meshStandardMaterial 
          color="#3C873A" 
          roughness={0.2} 
          metalness={0.8}
          emissive="#3C873A"
          emissiveIntensity={0.2} 
        />
      </mesh>
      
      {/* Connecting lines between technologies */}
      <group>
        {/* MongoDB to Express */}
        <mesh position={[-1, 1, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
          <meshStandardMaterial color="#8B5CF6" />
        </mesh>
        
        {/* Express to React */}
        <mesh position={[1, 1, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
          <meshStandardMaterial color="#8B5CF6" />
        </mesh>
        
        {/* Express to Node.js */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
          <meshStandardMaterial color="#8B5CF6" />
        </mesh>
      </group>
    </group>
  );
}

function BackgroundObjects({ count = 20 }) {
  const positions = useRef<Array<Vector3>>([]);
  const rotations = useRef<Array<number>>([]);
  const scales = useRef<Array<number>>([]);
  
  useEffect(() => {
    positions.current = Array.from({ length: count }, () => {
      return new Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
    });
    
    rotations.current = Array.from({ length: count }, () => {
      return Math.random() * Math.PI * 2;
    });
    
    scales.current = Array.from({ length: count }, () => {
      return 0.1 + Math.random() * 0.5;
    });
  }, [count]);

  return (
    <group>
      {positions.current.map((position, i) => (
        <mesh key={i} position={position} rotation={[rotations.current[i], rotations.current[i], rotations.current[i]]}>
          <octahedronGeometry args={[scales.current[i], 0]} />
          <meshStandardMaterial 
            color={new Color().setHSL(Math.random(), 0.8, 0.5)} 
            roughness={0.5} 
            metalness={0.3} 
          />
        </mesh>
      ))}
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
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={isMobile ? 75 : 60} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Float 
          speed={2} 
          rotationIntensity={0.5} 
          floatIntensity={1}
        >
          <MernLogo />
        </Float>
        <BackgroundObjects count={isMobile ? 10 : 20} />
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
