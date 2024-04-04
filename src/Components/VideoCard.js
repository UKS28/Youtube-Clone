import React from 'react'

const VideoCard = ({thumbnail,title,channelName,views}) => {
  return (
    <div className='p-2 m-2 w-72 shadow-lg cursor-pointer rounded-xl'>
    <img alt='thumbnail' src={thumbnail} className='rounded-xl hover:rounded-none'/>
    <h2>{title}</h2>
    <h6 className='text-gray-500'>{channelName}</h6>
    <h6 className='text-gray-500'>{views} Views</h6>
  </div>
  )
}

export default VideoCard
