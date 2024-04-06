import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { useDispatch, useSelector } from 'react-redux'
import { setError } from '../Utils/appSlice';

const VideoComponent = () => {
  const [videos,setVideos]=useState([]);
  const dispatch=useDispatch();
  // console.log(videos.items);
  const getVideos = async ()=>{
       try{
         const data=await fetch(YOUTUBE_VIDEOS_API);
         if(data.status!==200) throw new Error('Failed to fetch data,status 400');

        //  console.log(data.status);
         const json=await data.json();
         // console.log(json);
         setVideos(json);
         dispatch(setError(""));
       }catch(err)
       {
        //  console.log(err);
          dispatch(setError(err));
       }
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


