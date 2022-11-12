import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


import styles from './Login.module.scss'
import { fetchUserData, SelectisAuth } from '../../redux/slices/auth';

function Login() {
  const isAuth = useSelector(SelectisAuth)
  const dispatch = useDispatch();
  const { register, handleSubmit, setError, 
    formState: { errors, isValid }} = useForm({
    defaultValues:{
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  const onSubmit = (values) => {
    dispatch(fetchUserData(values));
  };
  
  if (isAuth){
    return <Navigate to="/"/>
  }

  return (
      <div className={styles.forma}>
        <Typography className={styles.zag} variant="h5">
          Авторизація
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField className={styles.textF} label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type='email'
          {...register('email', {required: 'Заповніть поле'})}/><br/>
          <TextField className={styles.textF} label="Пароль"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          type='password'
          {...register('password', {required: 'Заповніть поле'})}/><br/>
          <Button type="submit" className={styles.button} size="large" variant="contained">
          Війти
          </Button>
        </form>
      </div>
    );
}

export default Login;