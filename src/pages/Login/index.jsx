import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './Login.module.scss'

function Login() {
    return (
        <div className={styles.forma}>
          <Typography className={styles.zag} variant="h5">
            Авторизація
          </Typography>
          <TextField className={styles.textF} label="E-Mail" /><br/>
          <TextField className={styles.textF} label="Пароль"/><br/>
          <Button className={styles.button} size="large" variant="contained">
            Війти
          </Button>
        </div>
      );
}

export default Login;