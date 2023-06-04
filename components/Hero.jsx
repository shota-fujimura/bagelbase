'use client'

import { easeInOut, motion } from "framer-motion"
import Image from "next/image"

const background = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}
const backgroundfilter = {
  hidden: {
    backgroundColor: '#006736',
  },
  visible: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
  }
}

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
}

export const Hero = () => {
  return (
    <div id="top" className="relative w-full h-screen">
      <motion.div
        className="-z-50"
        variants={background}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1.2,
          delay: 2.0,
          ease: 'easeInOut'
        }}
      >
        <Image
          src='/assets/top_1.jpg'
          fill={true}
          alt="bagel_image"
          style={{ objectFit: 'cover', zIndex: '-10' }}
        />
      </motion.div>
      <motion.div
        className="backdrop-opacity-10 backdrop-invert  h-full -z-30"
        variants={backgroundfilter}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1.2,
          delay: 1.8,
        }}
      />
      <div className="z-10 absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-[320px]">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 809.34 93.82"
          className="svgContainer"
        >
          {/* B */}
          <motion.path
            className="item"
            d="m725.44,76.14l13.6-61.87c1.9-8.57,7.21-12.78,15.91-12.78h42.97c6.25,0,11.42,5.17,11.42,11.42s-5.17,11.42-11.42,11.42h-33.58l-2.31,10.61h27.6c6.25,0,11.42,5.17,11.42,11.42s-5.17,11.42-11.42,11.42h-32.63l-2.58,11.56h28.55c6.25,0,11.42,5.17,11.42,11.42s-5.17,11.42-11.42,11.42h-44.73c-10.2,0-14.96-5.98-12.78-16.04Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          {/* A */}
          <motion.path
            className="item"
            d="m639.92,73.83c0-6.93,5.58-12.51,12.37-12.51,2.58,0,4.9.68,6.93,2.04,7.07,4.62,15.77,7.34,24.07,7.34,5.57,0,7.61-2.18,7.61-4.49,0-3.26-4.35-5.3-11.42-7.61-12.78-4.08-31.27-10.61-31.27-29.64,0-12.1,12.37-28.83,38.21-28.83,10.06,0,19.99,2.31,28.83,7.21,3.81,2.18,6.39,6.12,6.39,10.74,0,6.8-5.58,12.24-12.24,12.24-2.31,0-4.49-.68-6.25-1.77-6.66-3.94-14.14-5.71-19.72-5.71-5.03,0-7.07,2.18-7.07,4.62,0,2.99,4.76,5.03,11.56,7.21,12.92,4.08,31.54,11.01,31.54,28.28s-14.55,30.87-37.94,30.87c-13.6,0-26.11-3.4-35.76-9.52-3.4-2.18-5.85-6.12-5.85-10.47Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              delay: 0.2
            }}
          />
          {/* G */}
          <motion.path
            className="item"
            d="m619.26,93.55c-7.21,0-13.05-5.44-13.73-12.51l-.14-2.18h-33.58l-4.08,7.61c-2.18,4.21-6.66,7.07-11.69,7.07-7.34,0-13.33-5.98-13.33-13.19,0-2.45.82-4.89,1.9-6.8l36.44-61.87c4.08-6.8,11.56-11.56,20.12-11.56,11.83,0,21.48,8.7,23.11,19.99l8.57,57.65c1.22,8.29-5.17,15.77-13.6,15.77Zm-15.91-37.53l-2.86-31.68-16.72,31.68h19.58Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              delay: 0.4
            }}
          />
          {/* L */}
          <motion.path
            className="item"
            d="m453.52,76.14l13.6-61.87c1.9-8.57,7.21-12.78,15.91-12.78h37.39c18.36,0,26.24,11.69,26.24,22.57,0,11.56-9.65,22.16-20.4,23.12,8.84,2.45,12.92,10.33,12.92,17.95,0,11.97-8.29,27.06-32.23,27.06h-40.66c-10.2,0-14.96-5.98-12.78-16.04Zm52.76-18.63h-21.21l-2.72,12.37h21.21c5.03,0,8.29-2.99,8.29-6.8,0-2.99-2.04-5.58-5.57-5.58Zm5.85-33.72h-19.58l-2.58,11.42h20.4c5.57,0,7.07-3.67,7.07-6.53,0-2.45-1.5-4.89-5.3-4.89Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              delay: 0.6
            }}
          />
          {/* E */}
          <motion.path
            className="item"
            d="m368.85,76.28l14.41-65.67c1.36-6.12,6.66-10.47,13.19-10.47,8.43,0,15.09,7.34,13.05,16.32l-11.42,51.8h20.94c6.53,0,11.96,5.3,11.96,11.97s-5.44,11.96-11.96,11.96h-37.39c-10.2,0-14.96-5.85-12.78-15.91Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              delay: 0.8
            }}
          />
          {/* B */}
          <motion.path
            className="item"
            d="m287.81,76.14l13.6-61.87c1.9-8.57,7.21-12.78,15.91-12.78h42.97c6.25,0,11.42,5.17,11.42,11.42s-5.17,11.42-11.42,11.42h-33.58l-2.31,10.61h27.6c6.25,0,11.42,5.17,11.42,11.42s-5.17,11.42-11.42,11.42h-32.63l-2.58,11.56h28.55c6.25,0,11.42,5.17,11.42,11.42s-5.17,11.42-11.42,11.42h-44.73c-10.2,0-14.96-5.98-12.78-16.04Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          {/* A */}
          <motion.path
            className="item"
            d="m280.61,53.44l-2.45,11.15c-1.36,5.85-4.35,13.87-8.43,17.4-8.16,7.07-19.17,11.83-33.04,11.83-24.88,0-47.32-15.09-47.32-41.61,0-29.78,22.84-52.21,57.24-52.21,11.56,0,20.67,3.54,27.47,8.97,9.79,8.02,4.22,23.79-8.29,23.79-3.54,0-6.66-1.36-8.97-3.54-3.67-3.13-8.7-5.03-14.14-5.03-13.87,0-24.88,11.69-24.88,26.11,0,9.52,7.21,19.31,20.4,19.31,5.44,0,9.52-1.5,13.05-4.08l.82-4.08h-4.76c-6.12,0-11.29-5.03-11.29-11.29,0-5.71,5.17-11.29,11.29-11.29h24.07c8.57,0,10.88,7.07,9.25,14.55Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              delay: 0.2
            }}
          />
          {/* S */}
          <motion.path
            className="item"
            d="m166.26,93.55c-7.21,0-13.05-5.44-13.73-12.51l-.14-2.18h-33.58l-4.08,7.61c-2.18,4.22-6.66,7.07-11.69,7.07-7.34,0-13.33-5.98-13.33-13.19,0-2.45.82-4.9,1.9-6.8l36.44-61.87c4.08-6.8,11.56-11.56,20.12-11.56,11.83,0,21.48,8.7,23.11,19.99l8.57,57.65c1.22,8.29-5.17,15.77-13.6,15.77Zm-15.91-37.53l-2.86-31.68-16.72,31.68h19.58Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              delay: 0.5
            }}
          />
          {/* E */}
          <motion.path
            className="item"
            d="m.52,76.14L14.11,14.28c1.9-8.57,7.21-12.78,15.91-12.78h37.39c18.36,0,26.24,11.69,26.24,22.57,0,11.56-9.65,22.16-20.4,23.12,8.84,2.45,12.92,10.33,12.92,17.95,0,11.96-8.29,27.06-32.23,27.06H13.3c-10.2,0-14.96-5.98-12.78-16.04Zm52.76-18.63h-21.21l-2.72,12.37h21.21c5.03,0,8.29-2.99,8.29-6.8,0-2.99-2.04-5.58-5.57-5.58Zm5.85-33.72h-19.58l-2.58,11.42h20.4c5.57,0,7.07-3.67,7.07-6.53,0-2.45-1.5-4.9-5.3-4.9"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              delay: 0.8
            }}
          />
        </motion.svg>
      </div>
    </div>
  )
}
