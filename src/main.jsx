import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Canvas } from '@react-three/fiber'
import * as THREE from "three"
import './index.css'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { getProject } from "@theatre/core"
import hexaberryAnimationState from './HexBerry Animation.theatre-project-state.json'
import { Loader } from '@react-three/drei'

// studio.initialize();
// studio.extend(extension);
const sheet = getProject('HexBerry Animation', { state: hexaberryAnimationState }).sheet('Scene');


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Canvas frameloop="demand" shadows gl={ {
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
            preserveDrawingBuffer: true,
        } }
        camera={{
          position: [0, 0, 9],
          fov: 45,
        }}
        >
    <Suspense fallback={null}>
      <App sheet={sheet} />
    </Suspense>
    </Canvas>
    <Loader />
  </React.StrictMode>,
)

export default sheet;