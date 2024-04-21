import { Scroll, ScrollControls } from "@react-three/drei"
import { SheetProvider, editable as e } from "@theatre/r3f"
import Scene from "./components/Scene";
import './index.css'
import Navbar from "./components/Navbar";
import lines from './assets/excitment.svg'
import arrowDown from "./assets/arrow-down.svg";
import arrowLoop from './assets/loop-arrow.svg';
import arrowUp from "./assets/arrow-up.svg";

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
          <h6 className="text-sm">Where Flavor Meets Fun!</h6>
          <img src={lines} alt="excitment lines" className="transform rotate-180" />
          <h6 className="text-sm absolute bottom-44">Ready to dive in?</h6>
          <img src={arrowDown} alt="down arrow" className="absolute bottom-28" />
          <p className="w-64 absolute left-64 bottom-64 text-right">Join the fizz revolution and experience the taste sensation everyone's talking about!</p>
          <p className="w-64 absolute right-60 bottom-96">Explore our vibrant range of refreshing sodas bursting with Hexaberry goodness.</p>
          <img src={arrowLoop} alt="Loop arrow" className="absolute left-100 bottom-80" />
          <img src={arrowUp} alt="up arrow" className="absolute right-100 bottom-72" />
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
