import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch} from 'react-redux';
import { logoutw } from '../../redux/slices/auth';

import styles from './Drawer.module.scss'

function Drawer(props) {
    const dispatch = useDispatch;

    const OnClickLogout = () => {
        if (window.confirm("Вийти з акаунту?")){
        dispatch(logoutw());
        }
    };
  
    return(
        <div className={styles.DrawerShadow}>
            <div className={styles.Drawer}>
                <button className={styles.xb} onClick={props.onClose}>X </button>
                <h2 className={styles.uname}>Username</h2>
                <div className={styles.Info}>
                    <img width = {300} height = {300} src = "/img/user.svg"/>
                    <div className={styles.UserMenu}>
                        <Link to='/'>
                        <button className={styles.button}>
                            <h3>Стрічка новин</h3>
                        </button>
                        </Link>
                        <br/>
                        <button className={styles.button}>
                            <h3>Моя сторінка(NW)</h3>
                        </button>
                        <br/>
                        <Link to='/addpost'>
                        <button className={styles.button}>
                            <h3>Створити новий допис</h3>
                        </button>
                        </Link>
                        <br/>
                        <button className={styles.button}>
                            <h3>Підписки(NW)</h3>
                        </button>
                        <br/>
                        <button className={styles.button}>
                            <h3>Діалоги(NW)</h3>
                        </button>
                        <br/>
                        <button onClick={OnClickLogout} className={styles.ButtonLogout}>
                            <h3>Вийти з акаунту</h3>
                        </button>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawer;