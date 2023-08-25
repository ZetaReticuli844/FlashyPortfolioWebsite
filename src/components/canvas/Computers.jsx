import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import  CanvasLoader from '../Loader'
const Computers = () => {
  const computer=useGLTF('./PC/scene.gltf')
  return (
   
<mesh>
  <hemisphereLight intensity={0.35} groundColor="black" />
  <pointLight position={[0, 50, 0]} intensity={0.5} />
  <primitive object={computer.scene} scale={1.5} position={[0,0,0]} />
</mesh>
    
  )
}
const ComputersCanvas = () => {
  return(
    <Canvas
    frameloop='demand' shadows camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}} >
<Suspense fallback={<CanvasLoader />}>
  <OrbitControls enableZoom={false}
  maxPolarAngle={Math.PI/2}
  minPolarAngle={Math.PI/2}/>
  <Computers />
  </Suspense>
  <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas