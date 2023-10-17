import * as React from 'react';

import {useRef, useState} from 'react';
import S from './Authorization.module.scss'
import Logo from '../../assets/Logo.png'
import Person from "../../assets/person.svg";
import Lock from "../../assets/lock.svg";
import Check from "../../assets/check.svg";
import {MyInput} from "../../UI/MyInput/MyInput";
import {MyButton} from "../../UI/MyButton/MyButton";

export const Authorization = () => {
    const [isCheck, setIsCheck] = useState(false)
    const setCheck = () => {
        setIsCheck(prev => !prev)
    }
    const emailRef = useRef()
    const passwordRef = useRef()
    const buttonHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className={S.body}>
            <div className={S.logo}>
                <img src={Logo} alt=""/>
            </div>
            <h2>Автоизация</h2>
            <form>
                <div className={S.InputEmail}>
                    <Person/>
                    <MyInput ref={emailRef} placeholder={'1'}/>
                </div>
                <div className={S.InputPassword}>
                    <Lock/>
                    <MyInput ref={passwordRef} placeholder={'1'}/>
                </div>
                <div className={S.submitBlock}>
                    <div onClick={setCheck} className={S.save}>
                        <div className={S.checkBox}>
                            {isCheck && <div className={S.checked}><Check/></div>}
                        </div>
                        <div className={S.textBox}>запомнить</div>
                        {/*<MyInput id={"scales"} name={"scales"} type={'checkbox'}/>*/}
                        {/*<label htmlFor="scales">запомнить</label>*/}
                    </div>
                    <MyButton onClick={buttonHandler}>
                        войти
                    </MyButton>
                </div>
            </form>
            <a href="#">
                зарегестрироваться
            </a>
        </div>
    );
};