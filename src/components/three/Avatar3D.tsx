
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, Float } from '@react-three/drei';
import { Group, Vector3 } from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

export function Avatar3D({ position = [0, 0, 0] as [number, number, number], scale = 2.5 }) {
  const group = useRef<Group>(null);
  const isMobile = useIsMobile();
  
  // Use a simple 3D model for the avatar
  useFrame((state) => {
    if (group.current) {
      // Gentle floating animation
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={group} position={new Vector3(...position)} scale={isMobile ? scale * 0.7 : scale}>
      {/* Character body */}
      <mesh castShadow position={[0, -0.8, 0]}>
        <capsuleGeometry args={[0.5, 1.2, 8, 16]} />
        <meshStandardMaterial color="#4F46E5" metalness={0.2} roughness={0.4} />
      </mesh>

      {/* Head */}
      <mesh castShadow position={[0, 0.7, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#F9FAFB" metalness={0.2} roughness={0.4} />
      </mesh>

      {/* Eyes */}
      <mesh position={[0.2, 0.75, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh position={[-0.2, 0.75, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Glasses */}
      <mesh position={[0, 0.75, 0.3]}>
        <torusGeometry args={[0.3, 0.03, 16, 100]} />
        <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Laptop */}
      <group position={[0, -0.3, 0.6]} rotation={[0.5, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.8, 0.05, 0.5]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh castShadow position={[0, 0.25, -0.25]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.05]} />
          <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.2} />
        </mesh>
        {/* Screen with glowing effect */}
        <mesh position={[0, 0.25, -0.23]}>
          <planeGeometry args={[0.7, 0.4]} />
          <meshStandardMaterial 
            color="#61DAFB" 
            emissive="#61DAFB" 
            emissiveIntensity={0.5} 
          />
        </mesh>
      </group>

      {/* Add a subtle glow effect */}
      <pointLight position={[0, 0, 1]} intensity={0.5} color="#61DAFB" />
    </group>
  );
}

export default Avatar3D;
