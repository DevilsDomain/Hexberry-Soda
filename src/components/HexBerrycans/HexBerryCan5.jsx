import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { editable as e } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

export default function HexaBerryCan5({ scale, position, material, meshRef, ...props }) {
  const { nodes, materials } = useGLTF('./models/hexaberry_soda_cans_DRACO.glb');

  return (
    <e.group theatreKey='HexbBerryCan5' scale={scale} position={position} dispose={null} ref={meshRef}>
      <group ref={meshRef} rotation={[-Math.PI / 2, 0, -1.429]} scale={9.104}>
        <mesh castShadow geometry={nodes.Soda_5_Metal004_0.geometry} material={materials['Metal.004']} />
        <mesh castShadow geometry={nodes.Soda_5_Soda004_0.geometry} material={materials[material]} />
      </group>
    </e.group>
  );
}

useGLTF.preload('/hexaberry_soda_cans_DRACO.glb');
