import React from 'react'
import { useSelector } from 'react-redux'
import style from './Error.module.scss'

export const Error = () => {
    const error_message = useSelector(state => state.booksReducer.error_message)

    return (
        <div className={style.error__container}>
            <h1>Ошибка: {error_message}</h1>
        </div>
    )
}
