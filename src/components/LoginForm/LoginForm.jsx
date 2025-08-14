import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
// const [username , setUsername]=useState("");
// const [password , setPassword]=useState("");    
const navigete = useNavigate();

const handleSubmit = (values) => {
localStorage.setItem('username', values.username);
navigete('/users');
}

// const handleChange= (e) =>{
//     setUsername(e.target.value);
//     console.log(e.target.value);
// }
// const handlePasswordChange =(e) =>{
//     setPassword(e.target.value);
// }

const handleValidate = (values) => {
    const errors = {};      
    if (!values.username) {
        errors.username = 'username is Required';
    } else if (values.username.length < 4) {        
        errors.username = 'Must be 4 characters or more';
    }   
    if (!values.password) {
        errors.password = 'password s Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters or more';
    }  
    return errors;
}
  return (
    <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={handleSubmit}
    validate={handleValidate}
    validateOnBlur={false}
    validateOnChange={true}
    >
    {({errors , handleSubmit}) => 
      <form onSubmit={handleSubmit} className={`${styles.form} flex flex-col items-center justify-center h-screen w-full md:w-2/4 gap-2.5  `}>
         <h2>Welcome!</h2>
        <Field name = "username" className={`${styles.field}`} type="text" />
        {errors.username && <p className='text-red-600'>{errors.username}</p>}
        <Field name ="password" className={`${styles.field}`} type="password"   />
        {errors.password && <p className='text-red-600'>{errors.password}</p>}
        <button className={styles.submitButton} >Login</button>
      </form>
    }
 </Formik>
  )
}
