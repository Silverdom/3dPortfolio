import React from 'react'
import birdScene from '../assets/3d/bird.glb';
import { useGLTF } from '@react-three/drei';

const Bird = () => {
  // We need to import the glb model and use it as such.
  const { scene, animations } = useGLTF(birdScene);

  // Mesh will have properties position, scale to align the children.
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird;