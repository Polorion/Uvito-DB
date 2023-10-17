import * as React from 'react';
import S from './MyInput.module.scss';

interface IMyInput {
    placeholder: string
}

export const MyInput = React.forwardRef((props: IMyInput, ref) => {
    return (
        <input ref={ref} onInput={(e) => {
        }} className={S.input} {...props}/>
    );
})


