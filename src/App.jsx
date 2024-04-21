import { Scroll, ScrollControls } from "@react-three/drei"
import { SheetProvider, editable as e } from "@theatre/r3f"
import Scene from "./components/Scene";
import './index.css'

function App({sheet}) {
  return (
    <>
    <ScrollControls pages={5} damping={1} maxSpeed={0.1}>
      <SheetProvider sheet={sheet} >
        <Scene />
      </SheetProvider>
      <Scroll html>
        <div className="w-screen h-screen">
          <h1 className="text-3xl font-bold underline">Landing page</h1>
        </div>
        <div className="w-screen h-screen"> 
          <h1 className="text-3xl font-bold underline">Lemon Lime</h1>
        </div>
        <div className="w-screen h-screen">
          <h1 className="text-3xl font-bold underline">Berries</h1>
        </div>
        <div className="w-screen h-screen">
          <h1 className="text-3xl font-bold underline">Exotic</h1>
        </div>
        <div className="w-screen h-screen">
          <h1 className="text-3xl font-bold underline">Podium</h1>
        </div>
      </Scroll>
    </ScrollControls>
    </>
  )
}

export default App
