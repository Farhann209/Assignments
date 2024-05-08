'use client'
import {Button,Input} from "@nextui-org/react";
import CustomNavbar from "@/components/navbar/page";
import Link from "next/link";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, <span style={{ color: 'red' }}>Too Short!</span>)
    .max(50, <span style={{ color: 'red' }}>Too Long!</span>)
    .required(<span style={{ color: 'red' }}>*Required!</span>),
  address: Yup.string()
  .min(7, <span style={{ color: 'red' }}>Too Short!</span>)
  .max(50, <span style={{ color: 'red' }}>Too Long!</span>)
  .required(<span style={{ color: 'red' }}>*Required!</span>),
  email: Yup.string().email(<span style={{ color: 'red' }}>Invalid Email!</span>).required(<span style={{ color: 'red' }}>*Required!</span>),
  password: Yup.string()
  .min(7, <span style={{ color: 'red' }}>Too Short!</span>)
  .max(50, <span style={{ color: 'red' }}>Too Long!</span>)
  .required(<span style={{ color: 'red' }}>*Required!</span>)
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      userName: '',
      address: '',
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <CustomNavbar/>

      <div className="flex justify-center">
      <div className="border border-black m-10 w-72 p-5">
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
      
      <Input className="mb-2"
      id= "password"
      name="[password]]"
      type="Password" 
      label="Password" 
      placeholder="Enter your password"
      onChange={formik.handleChange}
      value={formik.values.password} />
      {formik.errors.password}

      <Input className="mb-2"
      id= "userName"
      name="userName"
      label="Username" 
      placeholder="Enter your Username"
      onChange={formik.handleChange}
      value={formik.values.userName} />
      {formik.errors.userName}

      <Input className="mb-2"
      id= "address"
      name="address"
      label="Address" 
      placeholder="Enter your Address"
      onChange={formik.handleChange}
      value={formik.values.address} />
      {formik.errors.address}
      <br/>
      <Button type="submit" radius="full" className=" bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg ml-20">
        Submit
      </Button>
      <br/>
      <br/>
      Already have an account. <Link href="/login" className="text-blue-400 underline" >Login in.</Link>
    </form>
      </div>
      </div>
    
    </div>

     
 
  )
}

export default Register