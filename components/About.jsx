'use client'

import { motion } from "framer-motion"

import Image from "next/image"
import { Title } from "./Title"

export const About = () => {
  return (
    <div id="about" className="pt-[60px] pb-[60px] sm:py-[120px] mx-auto max-w-[1440px]">
      <Title title="ABOUT" />
      <div className="text-center  text-sm sm:text-lg font-bold mb-4 tracking-wide mt-4">
        <motion.h2
          className="text-center w-[80%] mx-auto"
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
          NYスタイルのベーグル専門店<br />
          自由が丘「ベーグルベース」
        </motion.h2>
      </div>
      <div className="sm:flex justify-center max-w-[1440px] mx-10 overflow-clip items-center">
        <motion.div
          className="sm:w-[40%] h-[300px] sm:h-[500px] overflow-clip mb-4 sm:mb-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: "0.2",
            duration: 0.8,
            delay: 0.5
          }}
        >
          <Image
            src='/assets/shop.jpg'
            alt="shopImage"
            width={700}
            height={300}
          />
        </motion.div>
        <motion.div
          className="sm:w-[40%] sm:ml-10 text-center sm:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: "0.2",
            duration: 0.8,
            delay: 0.8
          }}
        >
          <div className="mb-4 sm:mb-10">
            <h3 className="  text-sm sm:text-base">コンセプトテキスト<br />コンセプトテキスト</h3>
          </div>
          <div>
            <p className="text-xs sm:text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia deleniti molestiae voluptates libero excepturi ad impedit explicabo nulla quas, consectetur in. Commodi quibusdam cupiditate recusandae aperiam officia? Quis, ipsa quo!</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
