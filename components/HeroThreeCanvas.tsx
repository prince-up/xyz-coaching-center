"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function SceneObjects() {
  const groupRef = useRef<Group>(null);
  const ringRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.22 + pointer.x * 0.35;
      groupRef.current.rotation.x = pointer.y * 0.2;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.28;
      ringRef.current.rotation.z = t * 0.14;
    }

    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t * 1.1) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.25}>
        <mesh ref={sphereRef} position={[0.2, 0.2, 0]}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#ffd07a" roughness={0.35} metalness={0.45} />
        </mesh>
      </Float>
      <mesh ref={ringRef} rotation={[1, 0.25, 0.25]}>
        <torusGeometry args={[1.45, 0.1, 22, 110]} />
        <meshStandardMaterial color="#61e0d0" roughness={0.25} metalness={0.7} />
      </mesh>
      <mesh position={[-0.95, -0.7, -0.1]} rotation={[0.35, 0.3, -0.2]}>
        <octahedronGeometry args={[0.46, 0]} />
        <meshStandardMaterial color="#7ab5ff" roughness={0.35} metalness={0.4} />
      </mesh>
    </group>
  );
}

export default function HeroThreeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.65} />
      <directionalLight position={[2, 2, 3]} intensity={1} color="#ffe3b5" />
      <pointLight position={[-2, -1, 2]} intensity={1.1} color="#67d7ff" />
      <SceneObjects />
    </Canvas>
  );
}
