import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import noAvatarImg from '../img/noAvatar.jpg';
import { useLoginMutation } from '../services/authApi';
import { setAuthState } from '../redux/slices/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register, handleSubmit, setError, formState: {errors}
  } = useForm({
    defaultValues: {
      email:'testtuuuht@mail.ru',
      password: '1152152'
    },
    mode: 'onChange'
  });

  const [ login, { data } ] = useLoginMutation();

  const onSubmit = async (values) => {
    let email = values.email;
    let password = values.password;

    const userCredentials = {
      email, password
    }
    const response = await login(userCredentials);
    dispatch(setAuthState({ isLoggedIn: true, data: { ...response.data } }));

    
    if (response.data.token ) {
      window.localStorage.setItem('token', response.data.token);
      window.localStorage.setItem('current_user_id', response.data._id);
    } else {
      return alert('Login failed')
    }

    navigate('/')
  }
  return (
    <div className='register'>
      <h2 className="register-title">Log in</h2>
      <img src={noAvatarImg} alt="" />
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          label='Email' 
          error={Boolean(errors.email?.message)} 
          helperText={errors.email?.message}
          fullWidth
          className='field'
          {...register('email', {required: 'Put valid email'})}
          />
          <TextField 
          label='Password' 
          error={Boolean(errors.password?.message)}  
          helperText={errors.password?.message}
          fullWidth
          className='field'
          {...register('password', {required: 'Put correct password'})}
          />
        
        <div className='register-submit'>
          <button type="submit" className='btn btn-solid'>Sign in</button>
        </div>
      </form>
    </div>
  )
}

export default Login

// import React from 'react';
// import  noAvatar from '../img/noAvatar.jpg';
// import {useLoginMutation} from '../services/authApi';
// import TextField from '@mui/material/TextField';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setAuthState } from '../redux/slices/authSlice';


// const Login = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//  const {
//     register, handleSubmit, setError, formState: {errors}
//  } = useForm({
//     defaultValues: {
//         email:'testtuuuht@mail.ru',
//         password: '1152152'
//     },
//     mode: 'onChange'
//  })
//   const [login, {data}] = useLoginMutation();
  
//   const onSubmit = async (values) =>{
//     let email = values.email;
//     let password = values.password;

//     const userCredentials = {
//         email, password
//     }
//    const response= await login(userCredentials);
//    dispatch(setAuthState({isLoggedIn: true, data: {...response.data}}))
//    console.log(response.data)
//  if(response.data.token) {
//     window.localStorage.setItem('token', response.data.token);
//  } else {
//     return alert ('Login failed')
//  }

//    navigate('/')
//   }

//   const isLoggedIn = false
// //   console.log(data)

//   return (
//     <div className='register'>
//     <h2 className='register-title'> Log in</h2>
//     <img src={noAvatar}/>
//     <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
//         <TextField label='Email' error={Boolean(errors.email?.message)}
//         helperText={errors.password?.message}
//         fullWidth
//         className='field'
//         {...register('email', {required: 'Put valid email'})}
//         />
//          <TextField label='password' error={Boolean(errors.password?.message)}
//         helperText={errors.password?.message}
//         fullWidth
//         className='field'
//         {...register('password', {required: 'Put correct password'})}
//         />
//         {/* <div className='register-field'>
//             <input type='text' name='email' />
//             <label for='email'>Email</label>
//         </div>
//         <div className='register-field'>
//             <input type='password' name='password' />
//             <label for='password'>Password</label>
//         </div> */}
//         <div className='register-submit'>
//             <button type='submit' className='btn btn-solid btn--stripe'> Sign in</button>
//         </div>
//     </form>
// </div>
//   )
// }

// export default Login