import { Environment, useScroll, Text, Center, GradientTexture, GradientType, MeshDistortMaterial, Backdrop, Plane, OrbitControls  } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { val, types } from '@theatre/core';
import { useCurrentSheet} from '@theatre/r3f'
import React from 'react'
import HexaBerryCan5 from './HexBerrycans/HexBerryCan5.jsx';
import { Vector3, MathUtils} from 'three'
import { useState, useRef } from 'react';
import {editable as e} from '@theatre/r3f';
import { VendingMachine } from './VendingMachine.jsx';
import HexaBerryCan1 from './HexBerrycans/HexaBerryCan1.jsx';
import HexaBerryCan2 from './HexBerrycans/HexaBerryCan2.jsx';
import HexaBerryCan3 from './HexBerrycans/HexBerryCan3.jsx';
import HexaBerrycan4 from './HexBerrycans/HexBerryCan4.jsx';

function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const { camera, mouse } = useThree()
    const vec = new Vector3()
    const meshRef = useRef();
    const textRef = useRef();
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


    // Material sheet object
    const material = sheet.object('material', {
        materials: types.stringLiteral(
            'materials',
            { "Soda.001": 'Soda1', "Soda.003": 'Soda2', "Soda.004": 'Soda3'  },
            ),
    }, {reconfigure: true})


    // Background text sheet object
    const HexaBerryText = e(Text, 'mesh', {reconfigure: true});
    const FlavorOneText = e(Text, 'mesh', {reconfigure: true});
    const FlavorTwoText = e(Text, 'mesh', {reconfigure: true});
    const FlavorThreeText = e(Text, 'mesh', {reconfigure: true});



  return (
    <>
    {/* <OrbitControls /> */}
    <color attach="background" args={["#FCF8F5"]} />
    <Environment preset='warehouse'/>
    <ambientLight intensity={1} />

    <directionalLight
    theatreKey='DirectionalLight'
    intensity={3}
    color={"#f67b35"}
    position={[10,30.4, 4.9]} // Position the light at the ceiling level
    rotation={[0, 2, 0, 0]} // Rotate the light to point downwards
    castShadow
    shadow-mapSize-height={512}
    shadow-mapSize-width={512}
    />

    {/* Background */}
    <mesh position={[0,0,-6]}>
      <planeGeometry args={[27, 30, 32, 32]} />
        <meshBasicMaterial>
            <GradientTexture stops={[0, 1]} colors={gradientColors} size={1024} />
        </meshBasicMaterial>
    </mesh>
    {/* Background Text */}
    <Center position={[0.5,1.9,-1]}>
        <HexaBerryText
        theatreKey='HexaberryText'
        font={".//fonts/AlloyInk-nRLyO.ttf"} 
        fontSize={2.3}
        onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
        >
            HEXABERRY
            <MeshDistortMaterial ref={textRef} distort={0.3} speed={1}>
                <GradientTexture
                stops={[0, 1]} 
                colors={['#FF2F6A', '#FFB307']}
                size={1024}
                type={GradientType.Radial}
                />
            </MeshDistortMaterial>
        </HexaBerryText>
    </Center>
    {/* <Center position={[0.5,1.9,-1]}>
        <FlavorOneText
        theatreKey='HexaberryText'
        font={".//fonts/AlloyInk-nRLyO.ttf"} 
        fontSize={2.3}
        onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
        >
            Lemon&Lime
            <MeshDistortMaterial ref={textRef} distort={0.3} speed={1}>
                <GradientTexture
                stops={[0, 1]} 
                colors={['#2FE9C7', '#F8CC30']}
                size={512}
                type={GradientType.Radial}
                />
            </MeshDistortMaterial>
        </FlavorOneText>
    </Center> */}
    {/* <Center position={[0.5,1.9,-1]}>
        <FlavorTwoText
        theatreKey='HexaberryText'
        font={".//fonts/AlloyInk-nRLyO.ttf"} 
        fontSize={2.3}
        onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
        >
            Berries
            <MeshDistortMaterial ref={textRef} distort={0.3} speed={1}>
                <GradientTexture
                stops={[0, 1]} 
                colors={['#F32687', '#4461ED']}
                size={1024}
                type={GradientType.Radial}
                />
            </MeshDistortMaterial>
        </FlavorTwoText>
    </Center> */}
    {/* <Center position={[0.5,1.9,-1]}>
        <FlavorThreeText
        theatreKey='ExoticText'
        font={".//fonts/AlloyInk-nRLyO.ttf"} 
        fontSize={2.3}
        onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
        >
            Exotic
            <MeshDistortMaterial ref={textRef} distort={0.3} speed={1}>
                <GradientTexture
                stops={[0, 1]} 
                colors={['#FD55A6', '#FCC737']}
                size={1024}
                type={GradientType.Radial}
                />
            </MeshDistortMaterial>
        </FlavorThreeText>
    </Center> */}
    {/* Product */}
    <HexaBerryCan5 scale={0.047} position={[0, -0.3, 0]} material={material.value.materials} meshRef={meshRef} />
    <HexaBerryCan1 scale={0.047} position={[0, -10, 0]} rotation={[0,0.12,0]} />
    <HexaBerryCan2 scale={0.01} position={[0, -10, 0]} rotation={[-0.21, 0.63, 1.61]} />
    <HexaBerryCan3 scale={0.047} position={[0, -10, 0]} rotation={[0, -0.33, 0]} />
    <HexaBerrycan4 scale={0.047} position={[0, -10, 0]} rotation={[0, 0.36, 0]} />
    <VendingMachine position={[0,-10,-2]} scale={1} rotation={[0, Math.PI / 6, 0]} />
    {/* Floor */}
    <e.mesh theatreKey='Floor' position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[25, 30, 32, 32]} />
        <meshStandardMaterial attach="material" color="#FCF8F5" />
    </e.mesh>
    </>
  )
}

export default Scene