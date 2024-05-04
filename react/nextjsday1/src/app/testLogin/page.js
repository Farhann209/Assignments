import React from 'react'
import {Button,Input, DateRangePicker} from "@nextui-org/react";
import CustomNavbar from "@/components/kibuNav/page";


const modal = () => {
  return (
    <div>
      <CustomNavbar/>
      <div className='flex justify-end mr-8 mt-16'>
      <div className='border border-black w-96 h-96 p-5'>
      <Input labelPlacement='outside' radius='full' label="E-mail"/>
      <Input className='pt-5' labelPlacement='outside' radius='full' type='password' label='Password'/>
      <DateRangePicker  radius='full' labelPlacement='outside' label="Stay duration" className="max-w-xs pt-5" />
      <Button className='ml-28 mt-5 bg-red-400' variant='bordered'>Book with us</Button>
      </div>
    </div>
    </div>
    
  )
}

export default modal