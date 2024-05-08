'use client'
import React from 'react'
import {Button,Input} from "@nextui-org/react";
import CustomNavbar from "@/components/navbar/page";
import Link from "next/link";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
  .min(8, <span style={{ color: 'red' }}>Too Short!</span>)
  .max(50, <span style={{ color: 'red' }}>Too Long!</span>)
  .required(<span style={{ color: 'red' }}>*Required!</span>),
  email: Yup.string().email(<span style={{ color: 'red' }}>Invalid Email!</span>).required(<span style={{ color: 'red' }}>*Required!</span>),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <CustomNavbar/>
      <div className="flex justify-center ">
      <div className='border border-black m-7 w-72 p-4 '>
      <form onSubmit={formik.handleSubmit}>
          <Input  className="mb-2"
          id= "email"
          name="email"
          type="email" 
          label="Email" 
          placeholder="Enter your email"
          onChange={formik.handleChange}
          value={formik.values.email} />
          {formik.errors.email}      

          <Input  className="mb-2"
          id= "password"
          name="password"
          type="password" 
          label="Password" 
          placeholder="Enter your email"
          onChange={formik.handleChange}
          value={formik.values.password} />
          {formik.errors.password}  

          <br/>
          <Button type="submit" radius="full" className=" bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg ml-20">
            Login
          </Button>
          <br/>
          <br/>
          Don't have an account yet? <Link href="/register" className="text-blue-400">Sign Up Now.</Link>
          </form>
          </div>
          </div>
        </div>
 
  )
}

export default Login
