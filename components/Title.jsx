'use client'
import { motion } from "framer-motion"

export const Title = ({ title }) => {
  return (
    <motion.div
      className="text-center w-[80%] sm:w-[40%] mx-auto"
      initial={{ opacity: 0, y: 40}}
      whileInView={{ opacity: 1, y:0}}
      viewport={{ once: true}}
      transition={{
        type: "spring",
        bounce: "0.4",
        duration: 0.8
      }}
    >
      <h2 className=" font-bold text-xl text-green border-b-2 border-[#006736]">{title}</h2>
    </motion.div>
  )
}
