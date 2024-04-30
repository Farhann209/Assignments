import React from 'react'
import {Button,Input} from "@nextui-org/react";
import CustomNavbar from "@/components/navbar/page";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <CustomNavbar/>
      <div className="flex justify-center ">
      <div className='border border-black m-7 w-72 p-4 '>
          <Input label="Username" /> <br/>
          <Input type="password" label="Password" /> <br/>
          <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        Login
      </Button>
      <br/>
      <br/>
      Don't have an account yet? <Link href="/register" className="text-blue-400 underline">Sign Up Now.</Link>
      </div>
      </div>
    </div>
 
  )
}

export default Login