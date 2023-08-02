import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'src/pages/register/index.js'

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
  <div className='py-10 text-white bg-slate-500 mx-auto'>
    <h1 className='text-center text-3xl'>Registration Form</h1><br/>
    <Formik 
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >

      {({ errors, touched }) => (
        <Form  className='text-center'>
          <Field className='my-3' placeholder="firstName" name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}<br/>
          <Field className='my-3' placeholder='lastName' name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}<br/>
          <Field className='my-3' placeholder="email" name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br/>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Register