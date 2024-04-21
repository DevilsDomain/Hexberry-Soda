import { Environment, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { val } from '@theatre/core';
import { useCurrentSheet, editable as e } from '@theatre/r3f'
import React from 'react'
import HexaBerryCan5 from './HexBerrycans/HexBerryCan5.jsx';



function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();

    useFrame(() => {
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
    })
  return (
    <>
    <color attach="background" args={["#FCF8F5"]} />
    <Environment preset='warehouse' />
    <ambientLight intensity={6} />
    <HexaBerryCan5 scale={0.03} position={[0,-0.3,0]} />
    </>
  )
}

export default Scene