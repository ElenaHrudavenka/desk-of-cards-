import React from "react";
import s from './Button.module.scss'

type ButtonPropsType = {
    name: string,
    callBack: ()=>void,
}

const Button = (props:ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div onClick={onClickHandler} className={s.button}>
            <a href=''>{props.name}</a>
        </div>
    )
}
export default Button