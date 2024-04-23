import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Canvas } from '@react-three/fiber'
import * as THREE from "three"
import './index.css'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { getProject } from "@theatre/core"
import { CubeCamera, OrthographicCamera } from '@react-three/drei'

studio.initialize();
studio.extend(extension);
const sheet = getProject('HexBerry Animation').sheet('Scene');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Canvas gl={ {
            antialias: true,
            toneMapping: THREE.ReinhardToneMapping,
            // outputColorSpace: THREE.SRGBColorSpace
            preserveDrawingBuffer: true,
        } }
        camera={{
          position: [0, 0, 9],
          fov: 45,
        }}
        >
    {/* <CubeCamera makeDefault /> */}
    <Suspense fallback={null}>
      <App sheet={sheet} />
    </Suspense>
    </Canvas>
  </React.StrictMode>,
)
