import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import skyScene from '../assets/3d/sky.glb';
import { useFrame } from '@react-three/fiber';

const Sky = ({isRotating, propellerRotate}) => {
  const { scene, animations } = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (propellerRotate) {
      skyRef.current.rotation.y -= 0.15 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={ scene } />
    </mesh>
  )
}

export default Sky
