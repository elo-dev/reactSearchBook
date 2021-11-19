import React from 'react'
import { Card } from 'antd'
import style from './Book.module.scss'
import noPicture from '../../assets/img/no-picture.png'
import { NavLink } from 'react-router-dom'

export const Book = ({ id, volumeInfo }) => {
  const { title, imageLinks, authors, categories } = volumeInfo

  if (!imageLinks) {
    return [
      <div key={id} className={style.book}>
        <Card
          hoverable
          className={style.book__card}
          cover={<img alt={title} src={noPicture} />}
        >
          <span className={style.category}>{categories}</span>
          <p className={style.name}>{title}</p>
          <span className={style.author}>{authors}</span>
        </Card>
      </div>
    ]
  }

  const { smallThumbnail, thumbnail } = imageLinks

  return (
      <div className={style.book}>
        <NavLink to={`/book/${id}`}>
        <Card
          hoverable
          className={style.book__card}
          cover={<img alt={title} src={smallThumbnail} />}
        >
          <span className={style.category}>
            {categories ? categories[0] : 'Категория отсутствует'}
          </span>
          <p className={style.name}>{title}</p>
          <span className={style.author}>{authors}</span>
        </Card>
        </NavLink>
      </div>
  )
}
