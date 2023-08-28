import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import {Suspense} from 'react'
const Earth = () => {
  const earth=useGLTF('./Gundam/scene.gltf')

  return (
    <mesh>
    <hemisphereLight intensity={3} groundColor="black" />
  <pointLight position={[0, 50, 0]} intensity={0.5} />
<primitive object={earth.scene}
scale={1.6} position-y={0}
rotation-y={0}/>
</mesh>

    

  )
}
const EarthCanvas = () => {
  return(
    <Canvas
    frameloop='demand' camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}} >
<Suspense fallback={<CanvasLoader />}>
  <OrbitControls enableZoom={false} autoRotate={true}
  maxPolarAngle={Math.PI/2}
  minPolarAngle={Math.PI/2}/>
  <Earth />
  </Suspense>
  <Preload all />
    
    </Canvas>
  )
}
export default EarthCanvas