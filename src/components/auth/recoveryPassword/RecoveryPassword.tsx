import React from 'react';
import s from './RecoveryPassword.module.scss'
import Button from "../../../common/components/Button/Button";

const RecoveryPassword = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <span className={s.forgot}>Forgot your password?</span>
                <input placeholder={'email'}/>
                <span className={s.email}>Enter your email address and we will send you further instructions </span>
                <Button name={'Send Instructions'} callBack={() => {alert("Button was pressed")}}/>
                <span className={s.remember}>'Did you remember your password?'</span>
                <span className={s.tryLogIn}>Try logging in</span>

            </div>
        </div>
    );
};

export default RecoveryPassword;