
'use client'
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { FaRegFaceLaughSquint } from "react-icons/fa6";
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react";


const page = () => {
    const [color, setColor]= useState('grey')
    const [reaction, setReaction]= useState('Like')


    const changeReaction =(newReaction, newColor)=>{
      //love --> newReaction--> love
      setReaction(newReaction)
      if(newReaction===reaction && color===newColor){
        setColor('grey')
        setReaction('Like')
      }else{
        setColor(newColor)
      }
    
    }

  const generateReactionButton = ()=>{
    //we will have if else later, if reaction is like, show like button,,..... similar
    if(reaction === 'love'){
      return (
            <button className=' p-2 flex items-center gap-1'>
            <FaHeart color="crimson" size={19}/> <span style={{fontSize:12}}>Loved</span> 
            </button>    
      )
    }
    else  if(reaction === 'haha'){
      return (
            <button className=' p-2 flex items-center gap-1'>
            <FaRegFaceLaughSquint color="orange" size={19}/> <span style={{fontSize:12}}>Laughed</span> 
        </button>
      )
    }
    else{
        return ( 
          <button 
          onClick={()=>changeReaction('like')}
           className='p-2'>
            <GrLike color={color} size={19}/>
           </button>)

    } 
  }
  const backdrops = [generateReactionButton()];

  const content = (
    <PopoverContent className="w-[240px]">

        <div className="px-1 py-2 w-full">
        <button  className=' p-2 '>
            <GrLike onClick={()=> changeReaction('like','skyblue')} color="skyblue" size={22}/> 
        </button>
        <button  className=' p-2 '>
            <FaHeart  onClick={()=> changeReaction('love')} color="crimson" size={22}/>
        </button>
        <button className=' p-2 w-24'>
            <FaRegFaceLaughSquint onClick={()=> changeReaction('haha')} color="orange" size={22}/>
        </button>
        </div>
    </PopoverContent>
  )
  
//ternary operator ? : is alternative for if else
//Do not use ternary operator for multiple else if
  return (
    <div className='flex justify-center'>
      <div className=''>  
        <div className="flex flex-wrap rounded gap-4 mt-24 bg-blue-300 w-52 p-2">
        {backdrops.map((backdrop) => (
          <Popover
            key={backdrop}
            showArrow
            offset={10}
            placement="top"
            backdrop={backdrop}
          >
            <PopoverTrigger className='w-24 bg-gray-300 rounded'>
              {generateReactionButton()}
            </PopoverTrigger>
            {content}
          </Popover>
        ))}
      </div>
    </div>
    </div>

  )
}

export default page
