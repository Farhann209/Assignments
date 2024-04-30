import React from 'react'
import {Button,Input} from "@nextui-org/react";

const page = () => {
  return (
    <div className='Form'>
     Register Page
     <br/>
     <br/>
     <Input label="Name" placeholder="Enter your name"/> <br/>
     <Input type="email" label="Email" placeholder="Enter your email" /> <br/>
     <Input type="password" label="Password" placeholder="Enter your password" /> <br/>
     <Input label="Address" placeholder="Enter your address" /><br/>
     <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg m-4">
      Submit
    </Button>
    </div>
  )
}

export default page