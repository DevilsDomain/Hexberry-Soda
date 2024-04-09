import { ScrollControls } from "@react-three/drei"
import { SheetProvider, editable as e } from "@theatre/r3f"
import Scene from "./components/Scene";


function App({sheet}) {
  return (
    <>
    <ScrollControls pages={10}>
      <SheetProvider sheet={sheet} >
        <Scene />
      </SheetProvider>
    </ScrollControls>
    </>
  )
}

export default App
