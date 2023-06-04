'use client'

import { Link as Scroll } from 'react-scroll'
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import MenuButton from "./atoms/MenuButton"

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(false)
  const controls = useAnimation();

  const handleClick = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const firstViewHeight = window.innerHeight;

      setShowHeader(scrollPosition > firstViewHeight);
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    if (showHeader) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 })
    }
  }, [showHeader, controls])

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      },
      opacity: 1,
    }),
    closed: {
      clipPath: "circle(40px at calc(100% - 40px) 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40
      },
      opacity: 0,
    }
  }
  const navItem = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: 40,
    }
  }
  const instaIcon = {
    open: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    closed: {
      opacity: 0,
      scale: 0,
      rotate: -10,
    }
  }
  const line = {
    open: {
      x: '200',
    },
    closed: {
      x: '0'
    }
  }

  const navItems = [
    {
      id: 'about',
      name: 'ABOUT'
    },
    {
      id: 'concept',
      name: 'CONCEPT'
    },
    {
      id: 'staff',
      name: 'STAFF'
    },
    {
      id: 'access',
      name: 'ACCESS'
    },
    // {
    //   id: 'info',
    //   name: 'WHOLESALE'
    // },
    {
      id: 'info',
      name: 'INFO'
    },
  ]
  return (
    <motion.div
      className="w-full h-[60px] Shadow flex justify-center z-50 bg-[#fafafa] fixed"
      style={{ opacity: 0 }}
      initial={{ opacity: 0}}
      animate={controls}
    >
      <nav className="flex justify-between items-center h-[60px] max-w-[1440px] w-full mx-4">
        <div>
          <Scroll to='top' smooth={true}>
            <Image
              src='/assets/logo_green.png'
              alt="BagelBase Logo"
              width={150}
              height={40}
            />
          </Scroll>
        </div>


        {/* DeskTop Navigation */}
        <div className='sm:flex hidden'>
          {navItems.map((navItem, index) => (
            <div
              key={index}
              className="mr-4  text-xs font-bold cursor-pointer hover:opacity-60 hover:scale-105 transition"
            >
              <Scroll to={navItem.id} smooth={true}>
                {navItem.name}
              </Scroll>
            </div>
          ))}
        </div>

        {/* Mobile Navigation (@media minwidth:640px) */}
        <div className="sm:hidden">
          <motion.div
            className="w-[40px] h-[40px] bg-white Shadow rounded-full flex items-center justify-center z-50"
            onClick={handleClick}
          >
            <MenuButton
              isOpen={isOpen}
              onClick={handleClick}
              color='#006736'
              className="z-50"
            />
          </motion.div>
          <motion.div
            className="absolute top-0 right-0 bottom-0 w-full bg-[#006736] h-screen -z-10"
            variants={sidebar}
            initial='closed'
            animate={isOpen ? 'open' : 'closed'}
          >
            <div className="w-[90%] mt-20 mx-auto">
              <div className="mx-auto mb-10">
                <Image
                  src="/assets/logo_white.png"
                  width={200}
                  height={40}
                  alt="bagel base logo"
                />
              </div>

              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="mb-6"
                  whileHover={{
                    opacity: 0.7,
                    scale: 0.98,
                  }}
                >
                  <Scroll to={item.id} smooth={true} offset={-20}>
                    <motion.div
                      className="text-white  text-lg font-bold"
                      variants={navItem}
                      transition={{
                        duration: 0.2,
                        delay: i * 0.1
                      }}
                      onClick={handleClick}
                    >
                      {item.name}
                      <motion.div
                        className="h-[2px] bg-white"
                        variants={line}
                      />
                    </motion.div>
                  </Scroll>
                </motion.div>
              ))}

              <div className='w-[90%] md:w-[80%] mx-auto mt-10'>
                <div className="flex justify-end items-center">
                  <div className="mr-2">
                    <p className=" text-md font-bold text-white">FOLLOW US</p>
                  </div>
                  <motion.div
                    variants={instaIcon}
                    transition={{
                      duration: 0.3,
                      delay: 0.6,
                      type: 'spring',
                      damping: 8
                    }}
                    onClick={handleClick}
                  >
                    <a href="https://www.instagram.com/bagel.base/" target="_blank">
                      <Image
                        src='/assets/instagram_icon_wh.png'
                        width={40}
                        height={40}
                        alt="instagram_icon"
                      />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </motion.div>

  )
}
