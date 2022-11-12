import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'

function Header(props){
    const isAuth = true;

    const onClickLogout = () => {};
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
                  Username
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