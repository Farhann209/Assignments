'use client'
import React from 'react';
import { useFormik } from 'formik';
import {Input} from "@nextui-org/react";
import * as Yup from 'yup';

 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
   .min(7, 'Too Short!')
   .max(50, 'Too Long!')
   .required('Required')
 });

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <Input 
      id= "firstName"
      name="firstName"
      label="firstName" 
      placeholder="Enter your firstName"
      onChange={formik.handleChange}
      value={formik.values.firstName} />
      {formik.errors.firstName}

      <Input 
      id= "lastName"
      name="lastName"
      label="lastName" 
      placeholder="Enter your lastName"
      onChange={formik.handleChange}
      value={formik.values.lastName} />
      {formik.errors.lastName}

      <Input 
      id= "email"
      name="email"
      type="email" 
      label="Email" 
      placeholder="Enter your email"
      onChange={formik.handleChange}
      value={formik.values.email} />
      
      {formik.errors.email}

      <Input 
      id= "password"
      name="[password]]"
      type="Password" 
      label="Password" 
      placeholder="Enter your password"
      onChange={formik.handleChange}
      value={formik.values.password} />
      {formik.errors.password}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm