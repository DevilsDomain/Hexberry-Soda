import { Environment, useScroll, Text, OrbitControls, Center, GradientTexture, GradientType  } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { val } from '@theatre/core';
import { useCurrentSheet, editable as e } from '@theatre/r3f'
import React from 'react'
import HexaBerryCan5 from './HexBerrycans/HexBerryCan5.jsx';
import { Vector3 } from 'three'
import { useState, useRef } from 'react';


function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const { camera, mouse } = useThree()
    const vec = new Vector3()
    const meshRef = useRef();
    const [material, setMaterial] = useState('Soda.004');


    useFrame(() => {
        // Theater.js logic
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
        // Camera lookAt cursor logic
        camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
        camera.lookAt(0, 0, 0)
        // Materail change logic
        const rotationY = meshRef.current.rotation.y;
        console.log('Rotation Y:', rotationY);
        if (rotationY >= 3.37 && rotationY < 9.28) {
            setMaterial('Soda.001');
          } else if (rotationY >= 9.28 && rotationY < 15.52) {
            setMaterial('Soda.003'); 
          } else if (rotationY >= 15.52) {
            setMaterial('Soda.004');
          } else {
            setMaterial('Soda.004');
          }
        });

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
    <HexaBerryCan5 scale={0.047} position={[0,-0.3,0]} material={material} meshRef={meshRef} />
    </>
  )
}

export default Scene