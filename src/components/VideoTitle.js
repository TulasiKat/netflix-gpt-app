import React from 'react'

const VideoTitle = (props) => {
    const {title , description} = props;
  return (
    <div className='w-screen aspect-video pt-[17%] px-24 absolute z-10 bg-gradient-to-r from-black h'>
        <h1 className='font-bold text-6xl text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-white'>{description}</p>
        <div className=''>
            <button className='btn bg-white  p-4 px-12 text-xl text-black rounded-lg mr-2 hover:opacity-80'>▶️ Play</button>
            <button className='btn bg-gray-500  p-4 px-12 text-xl text-white rounded-lg hover:opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle