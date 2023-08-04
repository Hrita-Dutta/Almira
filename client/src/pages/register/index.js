import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'src/pages/register/index.js'
import Image from 'next/image';

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
});


const Register = () => (
  <>

  {/* Code for Navbar */}
  <div className=' bg-stone-300 '>
    <div className='container mx-auto text-stone-500 py-3  flex justify-between'>
      <div>
        <Image src="/almiraLogo.png" width={200} height={100} ></Image>
      </div>
      <div>
        {/* Code will be added in future */}
      </div>
      <div>
        {/* Code will be added in future */}
      </div>
    </div>
  </div>

  {/* Code for Registration form */}
  <div className='bg-[#EEEDE7] h-[90vh] flex justify-center items-center'>
  <div>
    <div className='text-3xl text-zinc-400 text-center'>
    <h1>Registration Form</h1><br/>
    </div>

    <div className=' '>
    <Formik 
      className=""
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}>

      {({ errors, touched }) => (
        <Form  className='flex flex-col p-8 border-2 gap-8 bg-zinc-400 w-[400px] rounded-3xl'>
          <Field className='my-3 text-black' placeholder="firstName" name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div className=' text-orange-700'>{errors.firstName}</div>
          ) : null}
          <Field className='my-3 text-black' placeholder='lastName' name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div className=' text-orange-700'>{errors.lastName}</div>
          ) : null}
          <Field className='my-3 text-black' placeholder="email" name="email" type="email" />
          {errors.email && touched.email ? <div className=' text-orange-700'>{errors.email}</div> : null}

          <button className='rounded-full transition duration-500 hover:bg-[#E7D2CC] hover:text-zinc-800 uppercase font-semibold tracking-wide px-3 bg-stone-500 w-[100px] h-8 text-stone-300' type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    </div>
  </div>
  </div>
  </>
);




export default Register