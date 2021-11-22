import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import style from './Error.module.scss'

export const Error = () => {
    const { error_message } = useTypedSelector(state => state.booksReducer)

    return (
        <div className={style.error__container}>
            <h1>Ошибка: {error_message}</h1>
        </div>
    )
}
