'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Title } from "./Title"
import { useState, useEffect } from "react"

export const Instagram = () => {
  const [posts, setPosts] = useState([])
  const [hoveredPostId, setHoveredPostId] = useState(null)

  const handleMouseEnter = (postId) => {
    setHoveredPostId(postId)
  }
  const handleMouseLeave = () => {
    setHoveredPostId(null)
  }

  useEffect(() => {
    const id = process.env.ACCOUNT_ID
    const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN

    const requestUrl = `https://graph.facebook.com/v17.0/${id}?access_token=${token}&fields=media{media_url,media_type,like_count}`

    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => {
        const postsData = data.media.data.filter((post) => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM').map((post) => ({
          id: post.id,
          media_url: post.media_url,
          media_type: post.media_type,
          like_count: post.like_count
        }))
        const limitedPostsData = postsData.slice(0, 8)
        setPosts(limitedPostsData)
      })
      .catch((error) => {
        console.error('Error fetching Instagram posts')
      })
  }, [])

  const instaIcon = {
    open: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    closed: {
      opacity: 0,
      scale: 0.9,
      rotate: -2,
    }
  }

  const hover = {
    notHovered: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    Hovered: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    }
  }

  const like = {
    notHovered: {
      opacity: 0,
    },
    Hovered: {
      opacity: 1,
    }
  }

  return (
    <div id="instagram" className="pt-[60px] mb-10 max-w-[1440px] mx-auto">
      <Title title="INSTAGRAM" />
      <div className='sm:w-[60%] mx-auto text-center mt-4 mb-2 sm:mb-0'>
        <p className=' text-xs sm:text-sm'>
          日々の営業について発信しています。
        </p>
      </div>
      <div className='w-[90%] md:w-[80%] mx-auto'>
        <motion.div
          className="flex justify-end items-center"
          variants={instaIcon}
          initial="closed"
          animate="open"
          transition={{
            duration: 0.3,
            delay: 0.6,
            type: 'spring',
            damping: 8
          }}
        >
          <div className="mr-2">
            <p className=" text-xs font-bold">FOLLOW US</p>
          </div>
          <div>
            <a href="https://www.instagram.com/bagel.base/" target="_blank">
              <Image
                src='/assets/Instagram_bk.png'
                width={20}
                height={20}
                alt="instagram icon"
              />
            </a>
          </div>
        </motion.div>
      </div>
      <div className='w-[90%] md:w-[90%] mx-auto mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-[#fff]'>
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full aspect-w-1 aspect-h-1 relative"
            onMouseEnter={() => handleMouseEnter(post.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={post.media_url} alt={`Instagram post ${post.id}`} className="object-cover  w-full h-full" />
            {hoveredPostId === post.id && (
              <motion.div
                className="w-full h-full absolute top-0"
                variants={hover}
                initial="notHovred"
                animate="Hovered"
                transition={{
                  duration: 0.3
                }}
              >
                <motion.div
                  className="absolute bottom-2 right-4 flex items-center"
                  variants={like}
                  initial="notHovered"
                  animate="Hovered"
                  transition={{
                    delay: 0.2,
                    duration: 0.3,
                  }}
                >
                  <img src="/assets/heart.svg" className="w-[20px] mr-2"/>
                  <div className="text-white">{post.like_count}</div>
                </motion.div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
