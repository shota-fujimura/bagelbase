'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { Title } from './Title'

export const Staff = () => {
  return (
    <div id="staff" className='pt-[60px] sm:mx-0 mb-8 sm:mb-20'>
      <Title title="STAFF" />
      <motion.div
        className='sm:w-[60%] mx-auto text-center mt-4'
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
        <p className=' text-xs sm:text-sm mx-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Animi accusantium quis ea qui omnis perferendis repellendus beatae, ut,
          eveniet natus assumenda vitae aliquam, minus ex ipsam repudiandae quia ad voluptate.
        </p>
      </motion.div>
      <div className='flex justify-center mt-10 mx-4'>
        <motion.div
          className='w-[180px] sm:w-[200px] mr-10'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: "0.2",
            duration: 0.8,
            delay: 0.5
          }}
        >
          {/* Image */}
          <div className='overflow-clip flex justify-center mb-2'>
            <Image
              src="/assets/person-1.png"
              width={180}
              height={200}
              alt='staff_1'
            />
          </div>
          {/* TextBox */}
          <div className='text-center'>
            {/* Name-Japanese */}
            <div className='mb-1'>
              <p className=' text-sm font-bold'>サンプル太郎</p>
            </div>
            {/* Name-English */}
            <div className='mb-2'>
              <p className=' text-sm '>Taro Sample</p>
            </div>
            {/* Self-Introduction */}
            <div>
              <p className=' text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='w-[180px] sm:w-[200px]'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: "0.2",
            duration: 0.8,
            delay: 0.8
          }}
        >
          {/* Image */}
          <div className='overflow-clip flex justify-center mb-2'>
            <Image
              src="/assets/person-1.png"
              width={180}
              height={200}
              alt="staff_2"
            />
          </div>
          {/* TextBox */}
          <div className='text-center'>
            {/* Name-Japanese */}
            <div className='mb-1'>
              <p className=' text-sm font-bold'>サンプル太郎</p>
            </div>
            {/* Name-English */}
            <div className='mb-2'>
              <p className=' text-sm '>Taro Sample</p>
            </div>
            {/* Self-Introduction */}
            <div>
              <p className=' text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
