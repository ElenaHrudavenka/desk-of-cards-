import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/registration">Registration</NavLink>
            <NavLink to="/recovery">Recovery</NavLink>
            <NavLink to="/change-password">NewPassword</NavLink>
            <NavLink to="/profile">Profile</NavLink>

        </nav>
    );
};

export default Nav;