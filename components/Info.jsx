import Image from "next/image"
import { Title } from "./Title"

export const Info = () => {
  return (
    <div id="info" className="pt-[60px] mb-20 sm:mb-40 max-w-[1440px] mx-auto">
      <Title title="INFORMATION" />
      <div className="sm:flex justify-center max-w-[1440px] mx-10 mt-10 items-center">
        <div className="sm:w-[40%] h-[300px] sm:h-[500px] overflow-clip">
          <Image
            src='/assets/shop.jpg'
            alt="shopImage"
            width={700}
            height={500}
          />
        </div>
        <div className="sm:w-[50%] sm:ml-10 mt-4 sm:mt-0">
          <div className="sm:flex justify-start items-center  text-sm mb-8 border-b pb-2">
            <div className="sm:w-[30%] mb-1 sm:mb-0">
              <p className="font-bold sm:font-medium text-xs sm:text-sm">営業時間</p>
            </div>
            <div className="sm:w-[70%] text-xs sm:text-sm">
              <p >7:00~18:00<br/>(9:30~ サンドの販売開始)</p>
            </div>
          </div>
          <div className="sm:flex justify-start items-center  text-sm mb-8 border-b pb-2">
            <div className="sm:w-[30%] mb-1 sm:mb-0">
              <p className="font-bold sm:font-medium text-xs sm:text-sm">住所</p>
            </div>
            <div className="sm:w-[70%] text-xs sm:text-sm">
              <p>〒152-0034<br/>東京都目黒区緑ヶ丘2丁目15-1 103</p>
            </div>
          </div>
          <div className="sm:flex justify-start items-center  text-sm mb-8 border-b pb-2">
            <div className="sm:w-[30%] mb-1 sm:mb-0">
              <p className="font-bold sm:font-medium text-xs sm:text-sm">定休日</p>
            </div>
            <div className="sm:w-[70%] text-xs sm:text-sm">
              <p>毎週　月・火曜日</p>
            </div>
          </div>
          <div className="sm:flex justify-start items-center  text-sm mb-8 border-b pb-2">
            <div className="sm:w-[30%] mb-1 sm:mb-0">
              <p className="font-bold sm:font-medium text-xs sm:text-sm">決済方法</p>
            </div>
            <div className="sm:w-[70%] text-xs sm:text-sm">
              <p>現金、各種クレジットカード、電子マネー</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
