import { Environment, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { val } from '@theatre/core';
import { useCurrentSheet, editable as e } from '@theatre/r3f'
import React from 'react'

function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();

    useFrame(() => {
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
    })
  return (
    <>
    <Environment preset='city' />
    <ambientLight intensity={0.5} />
    <e.mesh theatreKey='box'>
      <boxGeometry args={[2,2,2]}  />
      <meshBasicMaterial color={'pink'}/>
    </e.mesh>
    </>
  )
}

export default Scene