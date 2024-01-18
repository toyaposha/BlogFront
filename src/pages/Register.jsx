import React from 'react';
import  noAvatar from '../img/noAvatar.jpg'
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRegisterUserMutation} from '../services/authApi';
import { setAuthState } from '../redux/slices/authSlice';


const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [registerUser, {data,error}] = useRegisterUserMutation();
 const {
    register, handleSubmit, setError, formState: {errors, isValid}
 } = useForm({
    defaultValues: {
        fullName: 'Kim min gyu',
        email:'testtuuuhtt@mail.ru',
        password: '1152152'
    },
    mode: 'onChange'
 })
 const onSubmit = async (values) =>{
    let fullName = values.fullName
    let email = values.email;
    let password = values.password;

    const userCredentials = {
      fullName, email, password
    }
   const response= await registerUser(userCredentials);
   dispatch(setAuthState({isLoggedIn: true, data: {...response.data}}))

//  if(response.data.token) {
//     window.localStorage.setItem('token', response.data.token);
//  } else {
//     return alert ('Register failed')
//  }

   navigate('/')
  }
  return (
    <div className='register'>
        <h2 className='register-title'> Create an account</h2>
        <img src={noAvatar}/>
        <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
        <TextField label='Full Name' error={Boolean(errors.fullName?.message)}
        helperText={errors.fullName?.message}
        fullWidth
        className='field'
        {...register('fullName', {required: 'Put valid name'})}
        />
        <TextField label='Email' error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        fullWidth
        className='field'
        {...register('email', {required: 'Put valid email'})}
        />
         <TextField label='password' error={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
        fullWidth
        className='field'
        {...register('password', {required: 'Put correct password'})}
        />
      
        <div className='register-submit'>
            <button type='submit' className='btn btn-solid btn--stripe'> Registraition</button>
        </div>
    </form>
    </div>
  )
}

export default Register