import React from 'react';
import Button from '@mui/material/Button';

import styles from './Header.module.scss'

function Header(){
    const isAuth = false;

    const onClickLogout = () => {};
    return(
        
        <header className={styles.header}>
            <div className={styles.HeaderLeft}>
                <h1>Svitlir</h1>
            </div>
            <div className={styles.HeaderRight}>
                <p>
                    Username
                </p>
                <img width={30} height ={30} src = "/img/user.svg" /> 
            </div>
        </header>
    );
}

export default Header;