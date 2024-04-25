import { Environment, useScroll, Text, Center, GradientTexture, GradientType, MeshDistortMaterial, Plane, OrbitControls  } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { val } from '@theatre/core';
import { useCurrentSheet, editable as e } from '@theatre/r3f'
import React from 'react'
import HexaBerryCan5 from './HexBerrycans/HexBerryCan5.jsx';
import { Vector3, MathUtils, PlaneGeometry, } from 'three'
import { useState, useRef } from 'react';

function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const { camera, mouse } = useThree()
    const vec = new Vector3()
    const meshRef = useRef();
    const textRef = useRef();
    const [material, setMaterial] = useState('Soda.004');
    const [hovered, hover] = useState(false)
    const [gradientColors, setGradientColors] = useState(['#FCF8F5', '#FCF8F5']);


    useFrame(() => {
        // Theater.js logic
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
        // Camera lookAt cursor logic
        camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
        camera.lookAt(0, 0, 0)
        // Materail & Background change logic
        const rotationY = meshRef.current.rotation.y;
        console.log('Rotation Y:', rotationY);
        if (rotationY >= 3.37 && rotationY < 9.28) {
            setMaterial('Soda.001');
            setGradientColors(['#ACE3D8', '#F6C276']); // Colors for 'Soda.001'
        } else if (rotationY >= 9.28 && rotationY < 15.52) {
            setMaterial('Soda.003');
            setGradientColors(['#FBA7D7', '#94A2FA']); // Colors for 'Soda.003'
        } else if (rotationY >= 15.52) {
            setMaterial('Soda.004');
            setGradientColors(['#FFA6D1', '#FFEA8F']); // Colors for 'Soda.004'
        } else {
            setMaterial('Soda.004');
            setGradientColors(['#FCF8F5', '#FCF8F5']); // Default colors
        }
        // Text Distortion logic
        textRef.current.distort = MathUtils.lerp(textRef.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
        });

  return (
    <>
    {/* <OrbitControls /> */}
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
    <HexaBerryCan5 scale={0.047} position={[0,-0.3,0]} material={material} meshRef={meshRef} />
    </>
  )
}

export default Scene