import React, { useEffect, useRef } from 'react'
import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  // We need to import the glb model and use it as such.
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    console.log(window.innerWidth);
    actions['Take 001'].play();
  }, [actions])

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.25 + 1.1;

    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
      birdRef.current.position.z = -1;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0
      birdRef.current.position.z = 1;
    }
    
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      // birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      // birdRef.current.position.z += 0.01;
    }
  })

  // Mesh will have properties position, scale to align the children.
  return (
    <mesh 
      position={ [-5, 0.5, 1] }
      // position={ [0, 0, 0] }
      scale={ [0.002, 0.002, 0.002] }
      ref={ birdRef }
    >
      <primitive object={ scene } />
    </mesh>
  )
}

export default Bird;