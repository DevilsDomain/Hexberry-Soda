import { Environment, useScroll, Text, Center, GradientTexture, GradientType, MeshDistortMaterial  } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { val, types } from '@theatre/core';
import { useCurrentSheet} from '@theatre/r3f'
import React from 'react'
import HexaBerryCan5 from './HexBerrycans/HexBerryCan5.jsx';
import { Vector3, MathUtils} from 'three'
import { useState, useRef } from 'react';

function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const { camera, mouse } = useThree()
    const vec = new Vector3()
    const meshRef = useRef();
    const textRef = useRef();
    // const [material, setMaterial] = useState('Soda.004');
    const [hovered, hover] = useState(false)
    const [gradientColors, setGradientColors] = useState(['#FCF8F5', '#FCF8F5']);


    useFrame(() => {
        // Theater.js logic
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
        // Camera lookAt cursor logic
        camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
        camera.lookAt(0, 0, 0)
        // Text Distortion logic
        textRef.current.distort = MathUtils.lerp(textRef.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
        // Background color change logic
        const background = sheet.object('background', {
            gradient: {
                color1: types.rgba({ r: 255, g: 0, b: 0, a: 1 }),
                color2: types.rgba({r: 255, g: 0, b: 0, a: 1}),
              },
          }, {reconfigure: true});

        function rgbaObjectToHexArray(colorObj) {
            const { r, g, b, a } = colorObj;
            const rHex = Math.round(r * 255).toString(16).padStart(2, '0');
            const gHex = Math.round(g * 255).toString(16).padStart(2, '0');
            const bHex = Math.round(b * 255).toString(16).padStart(2, '0');
            const hexColor = `#${rHex}${gHex}${bHex}`;
            return hexColor;
          }
          
          const color1Hex = rgbaObjectToHexArray(background.value.gradient.color1);
          const color2Hex = rgbaObjectToHexArray(background.value.gradient.color2);
          setGradientColors([color1Hex, color2Hex])
        });


    const material = sheet.object('material', {
        materials: types.stringLiteral(
            'materials',
            { 'Soda.001': 'Soda1', 'Soda.002': 'Soda2', 'Soda.004': 'Soda3'  },
            ),
    }, {reconfigure: true})

  return (
    <>
    <color attach="background" args={["#FCF8F5"]} />
    <mesh position={[0,0,-2]}>
      <planeGeometry args={[21, 12, 32, 32]} />
        <meshBasicMaterial>
            <GradientTexture stops={[0, 1]} colors={gradientColors} size={1024} />
        </meshBasicMaterial>
    </mesh>
    <Environment preset='warehouse' />
    <ambientLight intensity={1}/>
    <Center position={[0.5,1.9,-1]}>
        <Text
        theatreKey='3DText' 
        font={".//fonts/AlloyInk-nRLyO.ttf"} 
        fontSize={2.3}
        onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
        >
            HEXABERRY
            <MeshDistortMaterial ref={textRef} distort={0.1} speed={1}>
                <GradientTexture
                stops={[0, 1]} 
                colors={['#FD55A6', '#FCC737']}
                size={1024}
                type={GradientType.Radial}
                />
            </MeshDistortMaterial>
        </Text>
    </Center>
    <HexaBerryCan5 scale={0.047} position={[0,-0.3,0]} material={material.value.materials} meshRef={meshRef} />
    </>
  )
}

export default Scene