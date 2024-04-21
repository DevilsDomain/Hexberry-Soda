import { Scroll, ScrollControls } from "@react-three/drei"
import { SheetProvider, editable as e } from "@theatre/r3f"
import Scene from "./components/Scene";
import './index.css'

function App({sheet}) {
  return (
    <>
    <ScrollControls pages={10} damping={0.5}>
      <SheetProvider sheet={sheet} >
        <Scene />
      </SheetProvider>
      <Scroll html>
        <div>
          <h1 className="text-3xl font-bold underline">Landing page</h1>
        </div>
        <div style={{background:"green"}}>
          <h1>Lemon Lime</h1>
        </div>
        <div style={{background:"purple"}}>
          <h1>Berries</h1>
        </div>
        <div style={{background:"orange"}}>
          <h1>Exotic</h1>
        </div>
        <div style={{background:"blue"}}>
          <h1>Podium</h1>
        </div>
      </Scroll>
    </ScrollControls>
    </>
  )
}

export default App
