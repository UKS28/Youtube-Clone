import React from 'react'
import FilterComponent from './FilterComponent'
import VideoComponent from './VideoComponent'
const MainComponent = () => {
  return (
    <div className='flex flex-col'>
     <FilterComponent/>
     <VideoComponent/>
    </div>
  )
}

export default MainComponent
