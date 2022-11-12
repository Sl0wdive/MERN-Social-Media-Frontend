import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './Register.module.scss'

function Register() {
    return (
        <div className={styles.forma}>
          <Typography className={styles.zag} variant="h5">
            Створення акаунта
          </Typography>
          <TextField className={styles.textF} label="Ваше ім" /><br/>
          <TextField className={styles.textF} label="E-Mail" /><br/>
          <TextField className={styles.textF} label="Пароль"/><br/>
          <Button className={styles.button} size="large" variant="contained">
            Зареєструватися
          </Button>
        </div>
      );
}

export default Register;