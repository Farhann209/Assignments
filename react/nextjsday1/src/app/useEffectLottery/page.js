'use client'
import React, {useEffect, useState} from 'react'

const page = () => {
    const lotteryItem = [
      'Car',
      'X',
      'Bike',
      'X',
      'X',
      'X',
      'TV',
      'X',
      'X',
      'X'
    ]

    const [lotteryID, setLotteryID] = useState(null)

    useEffect(()=>{
      setInterval(() => {
        const randomNum = Math.ceil(Math.random()*lotteryItem.length)
        setLotteryID(randomNum)
      }, 100);
    }, [])

  return (
    <div>
      {
        lotteryItem.map((item, id)=>{
          return <div style={{backgroundColor: id === lotteryID ? 'red': null}} className='w-32 shadow-lg m-2 p-2'>
            {item}
          </div>
        })
      }
      <button>Pause</button>
    </div>
  )
}

export default page