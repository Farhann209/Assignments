'use client'
import React,{useState} from 'react'
import {Button,Input} from "@nextui-org/react";

const page = () => {
    let [num, setNum] = useState('')

    const digits = [
        ['7','8','9'],
        ['4','5','6'],
        ['1','2','3'],
        ['AC','0']
    ]

    const symbol = ['+','-','/','*','=','⌫']

    const calDigits= ()=>{
        return digits.map((item)=>{
            return (
                <div className='flex'>
                   {item.map((val)=>{
                        return(<div
                        onClick={()=>{
                            if (val === 'AC'){
                                AC();
                            }
                            else{
                                setNum(num+val)
                            }
                        }}
                        className='w-10 h-10 bg-gray-700 rounded-lg m-2 text-center text-2xl text-white'>
                                {val}
                            </div>)
                    })} 
                </div>
            )
        })
    }
    
    const calSym=()=>{
        return symbol.map((item)=>{
            return (
            <div 
            onClick={()=>handleSymbolChange(item)}
            className='flex m-2 bg-orange-500 w-10 h-10 rounded-lg text-right text-2xl text-white'>
                {item}
            </div>    
            )
        })
    }

    const handleSymbolChange = (symbol)=> {
        if(symbol === '='){
                const output = eval(num)
                setNum(output)
        }
        else if(symbol === '⌫'){
            setNum(num.slice(0,-1))
        }
        else{
          setNum(num+symbol)
        }
    }


    const AC = () =>{
        setNum('')
    }


  return (
    <div>
        <div className='bg-gray-700 w-56 h-10 text-white text-4xl'>
         {num}
      </div>
        <div className='flex'>
        <div className='bg-black text-white'>
        {calDigits()}
     </div>
        <div className='bg-black text-white'>
            {calSym()}
        </div>
    </div>
      </div>
        
  )
}

export default page