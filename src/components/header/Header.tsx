import React from 'react';
import Nav from "./nav/Nav";
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.headerBlock}>
            <Nav/>
        </div>
    );
};

export default Header;