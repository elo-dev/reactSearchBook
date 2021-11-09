import React from 'react'
import loader from './loader.gif'
import style from './Loader.module.scss'

export const Loader = () => {
    return (
        <div className={style.loader}>
            <img src={loader} alt="" />
        </div>
    )
}
