import { Title } from "./Title"

export const Access = () => {
  return (
    <div id="access" className="pt-[60px] mb-10 max-w-[1440px] mx-auto">
      <Title title="ACCESS" />
      <div className="sm:flex justify-center max-w-[1440px] mx-4 sm:mx-10 items-center mt-4 sm:mt-10">
        <div className="sm:w-[50%] h-[300px] overflow-clip">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.7749426545956!2d139.669176792939!3d35.60861776880596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f5708fb3a279%3A0x5d9b6d2a93c9727c!2zQkFHRUwgQkFTRSDjg5njg7zjgrDjg6vjg5njg7zjgrk!5e0!3m2!1sja!2sjp!4v1685070914493!5m2!1sja!2sjp"
            height='300'
            style={{ border: 0, width: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="sm:w-[40%] sm:ml-10 mt-8 sm:mt-0">
          <div className="mb-10 border-b pb-2">
            <p className=" text-xs sm:text-sm">東急東横線・大井町線<br />自由が丘駅から徒歩約10分</p>
          </div>
          <div className="border-b pb-2">
            <p className=" text-xs sm:text-sm">〒152-0034<br />東京都目黒区緑ヶ丘2丁目15-1 103</p>
          </div>
        </div>
      </div>
    </div>
  )
}
