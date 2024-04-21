import { Environment, useScroll, Text, OrbitControls, Center, GradientTexture, GradientType  } from '@react-three/drei';
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
    <Center position={[0.5,1.9,-1]}>
        <Text font={".//fonts/AlloyInk-nRLyO.ttf"} fontSize={2.3}>
            HEXABERRY
            <meshBasicMaterial>
            <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['#FD55A6', '#FCC737']} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
            type={GradientType.Radial}
            />
            </meshBasicMaterial>
        </Text>
    </Center>
    <HexaBerryCan5 scale={0.033} position={[0,-0.3,0]} />
    </>
  )
}

export default Scene