import * as React from 'react';
import S from './MyButton.module.scss'


export const MyButton = ({children, ...props}) => {

    return (
        <button className={S.button} {...props}>  {children}</button>
    );
}


