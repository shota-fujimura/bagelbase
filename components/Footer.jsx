'use client'

import Image from "next/image"
import Link from "next/link"
import { Link as Scroll } from 'react-scroll'

const footerItems = [
  {
    title: 'Top',
    text: 'BAGEL BASE',
    url: 'top',
  },
  {
    title: 'About',
    text: '店舗紹介',
    url: 'about',
  },
  {
    title: 'Concept',
    text: 'コンセプト',
    url: 'concept',
  },
  {
    title: 'Staff',
    text: 'スタッフ紹介',
    url: 'staff',
  },
  {
    title: 'Instagram',
    text: 'インスタグラム',
    url: 'instagram',
  },
  {
    title: 'Access',
    text: 'アクセス',
    url: 'access',
  },
  {
    title: 'Information',
    text: '店舗情報',
    url: 'info',
  },
]

export const Footer = () => {
  return (
    <div className="bg-green text-white pt-[60px]">
      <div className="max-w-[1440px] md:flex mx-auto pb-[60px]">
        {/* 1 */}
        <div className="md:w-4/12 px-10 pb-16 md:pb-0">
          <div className="border-b border-white pl-2 h-[40px] flex items-center">
            <Image
              src='/assets/logo_white.png'
              width={140}
              height={40}
              alt="bagel base logo"
            />
          </div>
          <div className="mt-4">
            <p className=" text-xs">
              住所<br />
              〒152-0034<br />
              東京都目黒区緑ヶ丘2丁目15-1 103
            </p>
          </div>
          <div className="my-4">
            <p className=" text-xs">
              営業時間<br />
              7:30 ~ 18:00<br />
              (9:30 ~ サンドの販売開始)
            </p>
          </div>
          <div className="flex justify-start items-center">
            <div className="mr-2">
              <p className=" text-xs font-bold">FOLLOW US</p>
            </div>
            <div>
              <a href="https://www.instagram.com/bagel.base/" target="_blank">
                <Image
                  src='/assets/instagram_icon_wh.png'
                  width={20}
                  height={20}
                  alt="instagram_icon"
                />
              </a>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="md:w-4/12 px-10 md:px-0 pb-16 md:pb-0">
          <div className="border-b border-white pl-2 h-[40px] flex items-center">
            <p className=" text-base font-bold">Site Map</p>
          </div>
          <div>
            {footerItems.map((item, index) => (
              <div className="mt-4 flex flex-start" key={index}>
                <div className="w-[30%]">
                  <p className=" text-xsm font-bold">{item.title}</p>
                </div>
                <div className="w-[70%]">
                  <Scroll to={item.url} smooth={true} offset={-20}>
                    <p className=" text-xs">{item.text}</p>
                  </Scroll>
                </div>
              </div>
            ))}

          </div>

        </div>
        {/* 3 */}
        <div className="md:w-4/12 flex items-center justify-center">
          <Image
            src='/assets/circle_logo_wh.png'
            width={160}
            height={100}
            alt="bagelbase logo circle"
          />
        </div>
      </div>
      <div className="border-t-2 border-white text-center py-1">
        <p className="text-[8px]  font-light">©︎2023 BAGEL BASE. All Rights Reserved.</p>
      </div>
    </div>
  )
}
