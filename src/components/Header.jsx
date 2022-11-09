import React from 'react';
import Button from '@mui/material/Button';

function Header(){
    const isAuth = false;

    const onClickLogout = () => {};
    return(
        
        <header>
            <div className="HeaderLeft">
                <h1>Svitlir</h1>
            </div>
            <div className="HeaderRight">
                <p>
                    Username
                </p>
                <img width={30} height ={30} src = "/img/user.svg" /> 
            </div>
        </header>
    );
}

export default Header;