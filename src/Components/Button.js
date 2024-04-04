import React from 'react'

const Button = ({alt,src,content}) => {
  return (
    <div>
    <div className='flex p-2 rounded-3xl bg-gray-300  mr-2 cursor-pointer'>
        <img alt={alt}
            src={src}
            className='w-6 h-6 rounded-3xl '
        />
        <span>{content}</span>
    </div>
    </div>
  )
}

export default Button
