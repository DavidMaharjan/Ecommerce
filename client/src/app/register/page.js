'use client'
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Button, Card, Input } from '@nextui-org/react';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phoneNo: '',
      gender: '',
      //Birthdate: ''
    },
    onSubmit: values => {
     registerUser(values)
    },
  });

  const registerUser =async (values)=>{
  const {data}= await  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, values)
  if(data) alert("registered successfully")
  }
  return (
    <Card className='m-4 p-4'>
 <form  onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="email">Email</label>
      <Input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label htmlFor="phoneNo">PhoneNo</label>
      <Input
        id="phoneNo"
        name="phoneNO"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.phoneNo}
      />
   <label htmlFor="gender">Gender</label>
      <Input
        id="gender"
        name="gender"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.gender}
      />
        
      <Button type="submit">Submit</Button>
    </form>
    </Card>
   
  );
};

export default SignupForm
