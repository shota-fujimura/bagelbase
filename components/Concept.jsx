'use client'

import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { motion } from 'framer-motion'

import { Title } from './Title'

const damp = THREE.MathUtils.damp
const material = new THREE.LineBasicMaterial({ color: '#006736' })
const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -1.0, 0), new THREE.Vector3(0, 1.0, 0)])
const state = proxy({
  clicked: null,
  urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((u) => `/${u}.jpg`)
})

function Minimap() {
  const ref = useRef()
  const scroll = useScroll()
  const { urls } = useSnapshot(state)
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      // Give me a value between 0 and 1
      //   starting at the position of my item
      //   ranging across 4 / total length
      //   make it a sine, so the value goes from 0 to 1 to 0.
      const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
      child.scale.y = damp(child.scale.y, 0.1 + y / 10, 8, 8, delta)
    })
  })
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line key={i} geometry={geometry} material={material} position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]} />
      ))}
    </group>
  )
}

function Item({ index, position, scale, c = new THREE.Color(), ...props }) {
  const ref = useRef()
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  const click = () => (state.clicked = index === clicked ? null : index)
  const over = () => hover(true)
  const out = () => hover(false)
  useFrame((state, delta) => {
    const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
    ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, clicked === index ? 5 : 4 + y, 8, delta)
    ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, clicked === index ? 4.7 : scale[0], 6, delta)
    if (clicked !== null && index < clicked)
      ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta)
    if (clicked !== null && index > clicked)
      ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta)
    if (clicked === null || clicked === index)
      ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta)
    ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(0, 1 - y), 6, delta)
    ref.current.material.color.lerp(c.set(hovered || clicked === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1)
  })

  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      onClick={click}
      onPointerEnter={over}
      onPointerOut={out} />
  )
}

function Items({ w = 0.9, gap = 0.15 }) {
  const { urls } = useSnapshot(state)
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap

  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={(width - xW + urls.length * xW) / width}
    >
      <Minimap />
      <Scroll>
        {urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0.2]} scale={[w, 10, 1]} url={url} />)}
      </Scroll>
    </ScrollControls>
  )
}

export const Concept = () => {
  return (
    <div id="concept" className='pt-[60px] h-[750px] mx-auto mb-[180px]'>
      <Title title="CONCEPT" />
      <motion.div
        className='mx-auto w-[90%] sm:w-[40%] mt-4'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          bounce: "0.2",
          duration: 0.8,
          delay: 0.3
        }}
      >
        <p className='text-center fonr-avenit text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ducimus aperiam inventore corporis officia eligendi ratione, nemo est explicabo illo!</p>
      </motion.div>
      <motion.div
        className='sm:w-[40%] mx-auto h-[92%] px-4 sm:px-0'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          bounce: "0.2",
          duration: 0.8,
          delay: 0.4
        }}
      >
        <Canvas
          gl={{ antialias: false }}
          dpr={[1, 1.5]}
          onPointerMissed={() => (state.clicked = null)}
        >
          <Items />
        </Canvas>
      </motion.div>
    </div>
  )
}
