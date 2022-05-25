import React, {useState} from 'react';
import s from './RecoveryPassword.module.scss'
import Button from "../../../../common/components/button/Button";
import Input from "../../../../common/components/input/Input";

const RecoveryPassword = () => {
    let [title, setTitle] = useState('')
    return (
        <div className={s.block}>
            <div className={s.container}>
                <span className={s.forgot}>Forgot your password?</span>
                <div className={s.inputContainer}>
                    <Input setTitle={setTitle} title={title} placeholder={"Email"}/>
                    <span className={s.email}>Enter your email address and we will send you further instructions </span>
                </div>
                <Button name={'Send Instructions'} callBack={() => {alert("Button was pressed")}}/>
                    <span className={s.remember}>'Did you remember your password?'</span>
                    <span className={s.tryLogIn}>Try logging in</span>
            </div>
        </div>
    );
};

export default RecoveryPassword;