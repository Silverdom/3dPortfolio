import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader';
import Island from '../models/island';
import Sky from '../models/Sky';
import Plane from '../models/Plane';
import Bird from '../models/Bird';
import Robbot from '../models/Robbot';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [propellerRotate, setPropellerRotate] = useState(false);

  // This function will adjust the island scale, position and rotation based on screen size.
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 786) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  // This function will adjust the Plane scale, position and rotation based on screen size.
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 786) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* To render a 3d model use need to use Canvas component. */ }
      <Canvas
        className={ `w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}` }
        camera={ { near: 0.1, far: 1000 } }
      >
        {/* This is a react component which shows the fallback component until the children are loaded. */ }
        <Suspense fallback={ <Loader /> }>
          {/* Different lighting to illuminate the model such as directional, ambient, hemisphere, point, spot. */ }
          <directionalLight position={ [1, 1, 1] } intensity={ 2 } />
          <ambientLight intensity={ 0.5 } />
          <hemisphereLight skyColor="#b1e1ff" groundColor='#000000'
            intensity={ 1 } />
          <Bird />
          <Sky
            isRotating={ isRotating }
            propellerRotate={ propellerRotate }
          />
          <Island
            position={ islandPosition }
            scale={ islandScale }
            rotation={ islandRotation }
            isRotating={ isRotating }
            setIsRotating={ setIsRotating }
            setCurrentStage={ setCurrentStage }
            setPropellerRotate={ setPropellerRotate }
          />
          <Plane
            planePosition={ planePosition }
            planeScale={ planeScale }
            isRotating={ isRotating }
            propellerRotate={ propellerRotate }
            rotation={ [0, 20, 0] }
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
