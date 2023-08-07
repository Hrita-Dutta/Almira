import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'src/pages/register/index.js'

import Navbar from '@/Components/Navbar';



const Admin = () => {

  const handleAddProducts = (values) => {
    fetch("http://localhost:8080/products", 
    {method:"POST",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(values)})
  } 

return (
<>
<Navbar/>

{/* Code for Registration form */}
<div className='flex justify-center items-center'>
<div>
  <div className='text-5xl text-zinc-600 text-center font-semibold mt-14'>
  <h1>Add Product</h1><br/>
  </div>

  <div className=''>
  <Formik 
    className=""
    initialValues={{
      productName: '',
      category: '',
      productPrice: '',
      productDescription: ''
    }}
    onSubmit={values => {
      handleAddProducts(values)
    }}>

    {({ errors, touched }) => (
      <Form  className='flex flex-col p-8 border-2 gap-8 bg-zinc-400 w-[400px] rounded-3xl  drop-shadow-2xl'>
        <Field className='my-3 text-black p-2' placeholder="productName" name="productName" />
        {errors.productName && touched.productName ? (
          <div className=' text-orange-700'>{errors.productName}</div>
        ) : null}
        <Field className='my-3 text-black' placeholder='category' name="category" />
        {errors.category && touched.category ? (
          <div className=' text-orange-700'>{errors.category}</div>
        ) : null}
        <Field className='my-3 text-black' placeholder="productPrice" name="productPrice" type="productPrice" />
        {errors.productPrice && touched.productPrice ? <div className=' text-orange-700'>{errors.productPrice}</div> : null}
        <Field className='my-3 text-black' placeholder="productDescription" name="productDescription" type="productDescription" />
        {errors.productDescription && touched.productDescription ? <div className=' text-orange-700'>{errors.productDescription}</div> : null}

        <button className='rounded-full transition duration-500 hover:bg-[#E7D2CC] hover:text-zinc-800 uppercase font-semibold tracking-wide px-3 bg-stone-500 w-[100px] h-8 text-stone-300' type="submit">Submit</button>
      </Form>
    )}
  </Formik>
  </div>
</div>
</div>
</>
)}




export default Admin;