import React from 'react'

const VideoTitle = (props) => {
    const {title , description} = props;
  return (
    <div className='w-screen aspect-video pt-[80%] md:pt-[17%] px-6 md:px-24 absolute z-10 bg-gradient-to-r from-black'>
        <h1 className='font-bold text-xl mt-[-83px] md:mt-[0px] md:text-6xl text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-white hidden md:inline-block'>{description}</p>
        {/* <div className=''>
            <button className='btn bg-white p-2 md:p-4 px-6 md:px-12 text-xl text-black rounded-lg mr-2 hover:opacity-80 my-4 md:my-0'>▶️ Play</button>
            <button className='hidden md:inline-block btn bg-gray-500  p-4 px-12 text-xl text-white rounded-lg hover:opacity-80'>More Info</button>
        </div> */}
    </div>
  )
}

export default VideoTitle