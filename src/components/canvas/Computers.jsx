import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import  CanvasLoader from '../Loader'
const Computers = ({isMobile}) => {
  const computer=useGLTF('./PC/scene.gltf')
  return (
   
<mesh>
  <hemisphereLight intensity={0.35} groundColor="black" />
  <pointLight position={[0, 50, 0]} intensity={0.5} />
  <primitive object={computer.scene} scale={isMobile?0.3:1.1} position={[4,-2.5,5]} />
</mesh>
    
  )
}
const ComputersCanvas = () => {
  
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 768px)")  
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
},[])
  
  
  return(
    <Canvas
    frameloop='demand' shadows camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}} >
<Suspense fallback={<CanvasLoader />}>
  <OrbitControls enableZoom={false}
  maxPolarAngle={Math.PI/2}
  minPolarAngle={Math.PI/2}/>
  <Computers  isMobile={isMobile}/>
  </Suspense>
  <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas