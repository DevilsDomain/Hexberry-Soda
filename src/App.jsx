import { Ring, Scroll, ScrollControls } from "@react-three/drei"
import { SheetProvider, editable as e } from "@theatre/r3f"
import Scene from './components/Scene';
import './index.css'
import Navbar from './components/Navbar';
import lines from './assets/excitment.svg'
import arrowDown from './assets/arrow-down.svg';
import arrowLoop from './assets/loop-arrow.svg';
import arrowUp from './assets/arrow-up.svg';
import Info from './components/Info';
import speechBubble from './assets/speechBubble.svg';
import speechBubble2 from './assets/speechBubble2.svg';
import speechBubble3 from './assets/speechBubble3.svg';


function App({sheet}) {
  return (
    <>
    <ScrollControls pages={5} damping={0.3} maxSpeed={0.3}>
      <SheetProvider sheet={sheet} >
        <Scene />
      </SheetProvider>
      <Scroll html className="gloria-hallelujah-regular">
        <Navbar sheet={sheet} />
        {/* Landing Page */}
        <div id="screen1" className="w-screen h-screen relative flex flex-col items-center mt-20">
          <img src={lines} alt="excitment lines" />
          <h6 className="text-sm">Where Flavor Meets Fun!</h6>
          <img src={lines} alt="excitment lines" className="transform rotate-180" />
          <h6 className="text-sm absolute bottom-44">Ready to dive in?</h6>
          <img src={arrowDown} alt="down arrow" className="absolute bottom-28" />
          <p className="w-64 absolute left-64 bottom-64 text-right">Join the fizz revolution and experience the taste sensation everyone's talking about!</p>
          <p className="w-64 absolute right-60 bottom-96">Explore our vibrant range of refreshing sodas bursting with Hexaberry goodness.</p>
          <img src={arrowLoop} alt="Loop arrow" className="absolute left-[29rem] bottom-80" />
          <img src={arrowUp} alt="up arrow" className="absolute right-[29rem] bottom-72" />
        </div>
        {/* Flavor 1 */}
        <div id="screen2" className="w-screen h-screen flex flex-col items-end relative">
          <p className=" text-center w-72 z-10 absolute top-20 right-44">The perfect balance of tangy lime and zesty lemon in every refreshing gulp.</p>
          <img src={speechBubble} alt="hand drawn speech bubble" className="h-96 w-96 absolute -top-14 right-32" />
          <div className=" absolute bottom-28 right-52">
            <Info align={"left"} />
          </div>
          <img src={lines} alt="excitment lines" className=" transform rotate-[125deg] absolute top-32 right-20" />
        </div>
        {/* Flavor 2 */}
        <div id="screen3" className="w-screen h-screen relative">
        <p className=" text-center w-72 z-10 absolute top-44 right-[30rem]">A burst of ripe berries that tantalize your taste buds and leave you craving more.</p>
          <img src={speechBubble2} alt="hand drawn speech bubble" className="h-96 w-96 absolute top-7 left-[34rem]" />
          <div className=" absolute bottom-28 left-[36rem]">
            <Info align={"left"} />
          </div>
          <img src={lines} alt="excitment lines" className=" transform rotate-[125deg] absolute top-64 right-96" />
        </div>
        {/* Flavor 3 */}
        <div id="screen4" className="w-screen h-screen relative">
        <p className=" text-center w-44 z-10 absolute bottom-60 right-80">vibrant blend that  transports you to paradise with every sip.</p>
          <img src={speechBubble3} alt="hand drawn speech bubble" className="h-96 w-64 absolute bottom-24 right-72" />
          <div className=" absolute bottom-28 left-96">
            <Info align={"right"} />
          </div>
          <img src={lines} alt="excitment lines" className=" transform rotate-[125deg] absolute bottom-36 right-64" />
        </div>
        {/* Podium */}
        <div id="screen5" className="w-screen h-screen">
        </div>
      </Scroll>
    </ScrollControls>
    </>
  )
}

export default App
