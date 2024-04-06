import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { offMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Button from './Button';
import { Comments } from '../Utils/contants';
import Comment from './Comment';
import LiveChatComponent from './LiveChatComponent';
const WatchPage = () => {

const dispatch=useDispatch();
const [searchParams]=useSearchParams();
const [videoData,setVideoData]=useState({});


// console.log(searchParams.get("v"));
const getVideoDetail=async ()=>{
  const data=await fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + searchParams.get("v") + "&key=" +process.env.REACT_APP_YOUTUBE_API_KEY);
  const json= await data.json();
// console.log(json.items[0].snippet); 
  setVideoData(json.items[0].snippet);
}

useEffect(()=>{
 dispatch(offMenu());
});
useEffect(()=>{
  getVideoDetail();
},[]);

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

  return (
    <div className='flex flex-col'>   
        <div className='flex m-2 justify-between'>
          {/* video + title + susbscriber buttons*/}
          <div className='flex flex-col '>
                  <iframe  
                  width="900" 
                  height="400" 
                  src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                  </iframe>

                  <div className='text-gray-900 m-4 font-bold text-2xl'>{videoData.title}</div>

                  <div className='flex justify-between w-[57rem]'>
                      <div >
                        <span className='mx-4 font-bold text-xl'>{videoData.channelTitle}</span>
                        <button className='p-2 rounded-3xl bg-black text-white'>Subscribe</button>
                      </div>

                      <div className='flex'>
                            <Button 
                              alt={"likes"} 
                              src={"data:image/png;base64,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"}
                              content={"Likes"}
                              />
                            <Button 
                              alt={"share"} 
                              src={"data:image/png;base64,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"}
                              content={"Share"}
                              />
                            <Button 
                              alt={"Dwnld"} 
                              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmpisf5zdu5nh2MOSn9wOKTf4HpE3b4IE0Q&s"}
                              content={"Download"}
                              />  
                      </div>
                  </div>

          </div>
            {/* live chat  */}
            <LiveChatComponent/>  
        </div>
         {/* comment sevtion  */}
        <div className='mx-4'>
                  <div >
                    <span className="font-bold text-gray-900 text-2xl">Comments </span>
                    <CommentsList comments={Comments} /> 
                  </div>
        </div>  
    </div>
  )
}

export default WatchPage
