import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { logout, SelectisAuth } from '../../redux/slices/auth';

function Header(props){
  const isAuth = useSelector(SelectisAuth);
  const userData = useSelector(state => state.auth.data);
  
  return(
    <header className={styles.header}>
      <div className={styles.HeaderLeft}>
        <Link to='/'>
          <img src='/img/LOGOMAIN.png'/>
        </Link>
        </div>
        <div className={styles.HeaderRight}>
          {isAuth ? (
            <>
              <p>
                {userData.fullName}
              </p>
              <img onClick={props.onClickDrawer} width={30} height ={30} src = "/img/user.svg" /> 
            </>
            ) : (
            <>
              <Link to="/login">
                <Button className={styles.button} variant="contained">Війти</Button>
              </Link>
              <Link to="/register">
                <Button className={styles.button} variant="contained">Створити акаунт</Button>
              </Link>
            </>
            )}
      </div>
    </header>
  );
}

export default Header;