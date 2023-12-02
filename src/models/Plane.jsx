import React, { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, propellerRotate, ...props }) => {
  const ref = useRef();
  const {scene, animations} = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    // if (propellerRotate) {
      actions['Take 001'].play();
    // }else {
      // actions['Take 001'].stop();
    // }
  }, [actions, propellerRotate])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene}  />
    </mesh>
  )
}

export default Plane;