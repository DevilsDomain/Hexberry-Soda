import { Scroll, ScrollControls } from "@react-three/drei"
import { SheetProvider, editable as e } from "@theatre/r3f"
import Scene from "./components/Scene";
import './index.css'
import Navbar from "./components/Navbar";
import lines from './assets/excitment.svg'
import arrowDown from "./assets/arrow-down.svg";

function App({sheet}) {
  return (
    <>
    <ScrollControls pages={5} damping={0.3} maxSpeed={0.7}>
      <SheetProvider sheet={sheet} >
        <Scene />
      </SheetProvider>
      <Scroll html className="gloria-hallelujah-regular">
        <Navbar />
        <div className="w-screen h-screen relative flex flex-col items-center mt-20">
          <img src={lines} alt="excitment lines" />
          <h6 className="text-base">Where Flavor Meets Fun!</h6>
          <img src={lines} alt="excitment lines" className="transform rotate-180" />
          <h6 className="text-sm absolute bottom-52">Ready to dive in?</h6>
          <img src={arrowDown} alt="down arrow" className="absolute bottom-32" />
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
