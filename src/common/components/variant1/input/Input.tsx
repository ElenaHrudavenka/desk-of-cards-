import React, {ChangeEvent} from 'react';
import s from './input.module.scss'

type InputPropsType = {
    title: string,
    setTitle: (title: string) => void,
    placeholder: string,
}

const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return (
        <input className={s.input} onChange={onChangeInputHandler} value={props.title} placeholder={props.placeholder}/>
    );
};

export default Input;