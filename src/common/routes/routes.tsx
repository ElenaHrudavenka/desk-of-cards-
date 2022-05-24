import React from 'react';
import {Route} from 'react-router';
import { Routes } from 'react-router-dom';
import Main from "../../components/main/Main";
import RecoveryPassword from "../../components/auth/recoveryPassword/RecoveryPassword";


const createRoutes = () => (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/recovery" element={<RecoveryPassword/>}/>
    </Routes>
);

export default createRoutes;