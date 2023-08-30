import React,{Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import { Decal,Float,OrbitControls,Preload,useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Cube = (props) => {
  const [decals] = useTexture([props.imgUrl]);
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={4.25}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#5C5470" roughness={0.5} metalness={0.5} 
        polygonOffset polygonOffsetFactor={-7} flatShading/>
        <Decal map={decals} position={[0, 0, 0.5]} 
        rotation={[0, 0, 0]}
        flatShading />
      </mesh>
    </Float>
  );
};
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Cube imgUrl={icon} />
        </Float>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas