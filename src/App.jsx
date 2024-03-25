import { OrbitControls } from "@react-three/drei"


function App() {

  return (
    <>
    <OrbitControls />
    <directionalLight color="#EF8664" position={[3, 4, 4]} intensity={1} />

    <mesh>
      <boxGeometry args={[2,2,2]}  />
      <meshBasicMaterial color={'pink'}/>
    </mesh>
    </>
  )
}

export default App
