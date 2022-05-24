import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/main">Main</NavLink>
            <NavLink to="/recovery">Recovery</NavLink>
        </nav>
    );
};

export default Nav;