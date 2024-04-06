import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/liveChatSlice';
import { generateRandomName, makeRandomMessage } from '../Utils/helper';
import LiveChat from './LiveChat';
const LiveChatComponent = () => {
    const [message,setMessage]=useState("");
    const dispatch=useDispatch();
    // const chatMessages=useSelector((store)=>store.chat.message);
    const chatMessages = useSelector((store) => store.chat.messages);

    // console.log(chatMessages);
    useEffect(()=>{
        const timer=setInterval(() => {
          dispatch(addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(20)+" "+makeRandomMessage(10)
          }) )   
          
          return ()=> clearInterval(timer)
          
        }, 1500);


    },[]);
   
    const handleSubmit =(ev)=>{
     ev.preventDefault();
     // console.log(message);
     dispatch(addMessage({
         name:"Ujjwal",
         message:message,
     }))
     setMessage("");

    }

  return (
    <div className='mx-4 rounded-2xl border border-black'>
               <span className='font-bold m-4'>Live Chat</span>
               <div className='m-4 overflow-y-scroll w-full h-[475px] flex flex-col-reverse'>
                 
                  {chatMessages.map((chat)=>(
                    <LiveChat name={chat.name} message={chat.message}/>
                  ))}
               </div> 
               <form className='m-2 border border-black p-1 ' onSubmit={(ev)=>{handleSubmit(ev)}}>
                      <input type='text'
                             placeholder='Type...'
                             className='w-96 p-2'
                             value={message}
                             onChange={(ev)=>{setMessage(ev.target.value)}}
                        />
                      <button className='mx-8 bg-gray-300 rounded-2xl px-2' >Send</button>
               </form>

            </div>
  )
}

export default LiveChatComponent

