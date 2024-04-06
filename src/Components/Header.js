import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../Utils/contants';
import Suggestion from './Suggestion';
import { setCache } from '../Utils/cacheSlice';

const Header = () => {

  const dispatch=useDispatch();
  const [searchItem,setSearchItem]=useState("") ;
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const  cacheSuggestions=useSelector((store)=>store.cache);

    //   console.log(cacheSuggestions);
    //   console.log(suggestions);
    //   console.log(showSuggestions); 

  useEffect(()=>{
    const timer=setInterval(() => {
      if(cacheSuggestions[searchItem])
      {
        setShowSuggestions(cacheSuggestions[searchItem]);
        // console.log(cacheSuggestions[searchItem]);
      }
      else
        {getSuggestions();}
    }, 2000); 

    return ()=>{
      clearTimeout(timer);
    }
   },[searchItem]);
   

    const toggleSideBarMenu=()=>{
      // console.log("clicked")
      dispatch(toggleMenu());
    }
    
    const getSuggestions=async ()=>{
     const data=await  fetch(YOUTUBE_SEARCH_API+searchItem);
     const json=await data.json();
     setSuggestions(json[1]);
     dispatch(setCache({
        [searchItem]: json[1],
      }))
    //  console.log(json);
   }


  return (
    <div className='grid grid-flow-col mt-4 pb-2 w-full'>
        <div className='flex ml-5 col-span-2'>
             <img alt="hamburger" 
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxo1HfKOwdxkAvT0o5kk4uNMQA2mQQQLnmQ&s'
               className='h-8 w-8 cursor-pointer mr-4 '
               onClick={()=>toggleSideBarMenu()}
               />
          
             <img alt="youtube-logo mr-2" 
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbgRM9PA5Waxg39a0G87fTJfzFDaTfQwMgNg&s'
               className='h-10 w-10 rounded-3xl'
               />
            <span className='mt-2 ml-2 text-black font-bold'>YouTube</span> 
            
        </div>

        <div className='col-span-9'>
          <div>
              <input 
              type='text'
              placeholder='Search'
              value={searchItem}
              onChange={(ev)=>{ setSearchItem(ev.target.value)}}
              className='w-3/5 p-2 rounded-l-3xl border border-gray-500 shadow-lg'
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              />
              <button className='p-2 rounded-r-3xl border border-gray-500 bg-gray-100 shadow-lg  hover:bg-black hover:text-white'>Submit</button>
          </div>
           {(showSuggestions && searchItem!=="") &&
            <div className='w-2/5  absolute rounded-xl z-10 bg-white'>
               {suggestions.map((suggestion)=>(
                <Suggestion suggestion={suggestion} />
               ))}
   
           </div>}
        </div>

        <div className='col-span-1'>
          <img 
          alt='user-icon' 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvL5yE1GMfEp-pq1Zi8RGomSlWo2kbw5vkw&s'
          className='h-8 w-8 mr-8 rounded-2xl cursor-pointer'
          />
        </div>
        
    </div>
  )
}

export default Header;
