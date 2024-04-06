import React from 'react'
import { listItems } from "../Utils/contants"


const FilterComponent = () => {
 
return (
  <div className='m-6 flex '>
    {
       listItems.map((item, index) => (
        <span key={index} className='ml-2 mr-2 px-4 py-2 border cursor-pointer bg-gray-300 rounded-xl hover:bg-black hover:text-white'>
          {item}
        </span>
      ))
    }
  </div>
);
}

export default FilterComponent
