import React from 'react'

const Comment = ({data}) => {
    const {name,text,replies}=data;
    
  return (
    <div className='bg-gray-50 m-1'>
        <div className='flex '>
            <img 
            alt='user-icon' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvL5yE1GMfEp-pq1Zi8RGomSlWo2kbw5vkw&s'
            className='h-8 w-8 mr-8 rounded-2xl cursor-pointer'
            />
            <span>{name}</span>
        </div>
       <div>
        {text}
       </div>
         
    </div>
  )
}

export default Comment
