import { Environment, useScroll, Text, OrbitControls, Center, GradientTexture, GradientType  } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { val } from '@theatre/core';
import { useCurrentSheet, editable as e } from '@theatre/r3f'
import React from 'react'
import HexaBerryCan5 from './HexBerrycans/HexBerryCan5.jsx';
import { Vector3 } from 'three'





function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const { camera, mouse } = useThree()
    const vec = new Vector3()

    useFrame(() => {
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
        camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
        camera.lookAt(0, 0, 0)
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
            stops={[0, 1]} 
            colors={['#FD55A6', '#FCC737']}
            size={1024}
            type={GradientType.Radial}
            />
            </meshBasicMaterial>
        </Text>
    </Center>
    <HexaBerryCan5 scale={0.047} position={[0,-0.3,0]} />
    </>
  )
}

export default Scene