'use client'
import React,{useState} from 'react'
import { BiSolidLike } from "react-icons/bi";
import {Button} from "@nextui-org/react";





const page = () => {
    const [color, setColor] = useState('gray')
    const [reaction, setReaction] = useState('LIKE')

    const handleColorChange = ()=>{
        if(color == 'gray'){
            setColor('blue')
            setReaction('UNLIKE')
        }
        else if(color == 'blue'){
            setColor('gray')
            setReaction('LIKE')
        }
    }

  return (
    <div className='flex justify-center'>
    
    <div className='mt-5'>
    <Button onClick={()=>handleColorChange()} className=' p-2 border border-black'>
    <BiSolidLike color={color}/>{reaction}
    </Button>
    </div>
    </div>
  )
}

export default page