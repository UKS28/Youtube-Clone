import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoComponent = () => {
  const [videos,setVideos]=useState([]);
  // console.log(videos.items);
  const getVideos = async ()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    // console.log(json);
    setVideos(json);
  } 

  useEffect(()=>{
     getVideos();
  },[]);

  if(videos.length===0)  return <Shimmer/>;
     
  return (
    <div className='flex flex-wrap'>

      {videos.items.map((video)=>(
       <Link to={"watch?v="+video.id} key={video.id} >
          <VideoCard 
                      thumbnail={video.snippet.thumbnails.medium.url}
                      title={video.snippet.title} 
                      channelName={video.snippet.channelTitle}
                      views={video.statistics.viewCount}/>
       </Link> 
      ))}
      
    </div>


  )
}

export default VideoComponent


