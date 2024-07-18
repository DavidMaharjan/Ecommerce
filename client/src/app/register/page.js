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
      phoneNO: '',
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

// import React, { useState } from 'react'
// import {Badge, Avatar, Input} from "@nextui-org/react";
// import {Card, CardHeader, CardBody, CardFooter, Divider, Image,RadioGroup, Radio} from "@nextui-org/react";
// import Link from 'next/link';

// const Register = () => {
//   const [value, setValue] =useState(1)
//   return (
//     <div className='flex justify-center m-24'>
//      <Card className="max-w-[400px]">
//       <CardHeader className="flex gap-3">
//         <img src='/hustle_logo.jpg' width={90} height={30}/>
//         <div className="flex flex-col">
//           <p className="text-md">REGISTER</p>
//           <p className="text-small text-default-500">HUSTLE</p>
//         </div>
//       </CardHeader>
//       <Divider/>
//       <CardBody>
//       <Input placeholder='enter your email'/><br/>
//     <Input placeholder='enter your password' type='password'/><br/>
//     <Input placeholder='enter your phone number'/><br/>
//     <Input placeholder='enter your full name'/><br/>
//     <RadioGroup
//       label="Select gender"
//     >
//       <Radio value="buenos-aires">Male</Radio>
//       <Radio value="sydney">Female</Radio>
//       <Radio value="san-francisco">Others</Radio>
//     </RadioGroup>
//     <button className='bg-black p-2 m-2 text-white '>Register</button><br/>
//       </CardBody>
//       <Divider/>
//       <CardFooter>
//          Already have an account? <Link href='/'> Sign In </Link>  instead
//       </CardFooter>
//     </Card>
 
//     </div>
//   )
// }

// export default Register