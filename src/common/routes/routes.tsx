import React from 'react';
import {Route} from 'react-router';
import { Routes } from 'react-router-dom';
import Main from "../../components/main/Main";
import RecoveryPassword from "../../components/auth/recovery/recoveryPassword/RecoveryPassword";
import Login from "../../components/auth/login/Login";
import Registration from "../../components/registration/Registration";
import NewPassword from "../../components/auth/newPassword/NewPassword";
import Profile from "../../components/profile/Profile";


const createRoutes = () => (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/recovery" element={<RecoveryPassword/>}/>
        <Route path="/change-password" element={<NewPassword/>}/>
        <Route path="/profile" element={<Profile/>}/>

    </Routes>
);

export default createRoutes;