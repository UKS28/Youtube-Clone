import React from 'react'

const LiveChat = ({name,message}) => {
  return (
    <div className='flex hover:bg-gray-200 hover:rounded-lg m-1'>
        <img 
        alt='user-icon' 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvL5yE1GMfEp-pq1Zi8RGomSlWo2kbw5vkw&s'
        className='h-8 w-8 mr-4 rounded-2xl cursor-pointer'
        />
        <span className='mr-2 font-bold'>{name}</span>
        <span>{message}</span>
    </div> 
  )
}

export default LiveChat
