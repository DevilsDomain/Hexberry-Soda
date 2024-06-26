/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 vending_machine_DRACO.glb 
Author: ¡Jacques (https://sketchfab.com/iJacques)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/vending-machine-f537e142a592428d85ca7a940be221d3
Title: Vending Machine
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { editable as e } from '@theatre/r3f';


export function VendingMachine({ scale, position, ...props }) {
  const { nodes, materials } = useGLTF('./models/vending_machine_DRACO.glb')
  return (
    <e.group theatreKey='VendingMachine' {...props} scale={scale} position={position} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Machine} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Plates} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Poster} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Glass} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Sweets} position={[0.461, 1.281, -0.152]} rotation={[-0.336, -0.501, 0.159]} scale={[0.186, 0.149, 0.186]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.Sweets} position={[0.385, 2.905, 0.266]} scale={0.24} />
    </e.group>
  )
}

useGLTF.preload('/vending_machine_DRACO.glb')
