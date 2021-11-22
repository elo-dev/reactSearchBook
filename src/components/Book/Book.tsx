import React from 'react'
import { Card } from 'antd'
import { NavLink } from 'react-router-dom'
import { IBook } from '../../types/books'
import noPicture from '../../assets/img/no-picture.png'
import style from './Book.module.scss'

const Book: React.FC<IBook> = ({ id, volumeInfo }) => {
  const { title, imageLinks, authors, categories } = volumeInfo

  return (
    <div className={style.book}>
      <NavLink to={`/book/${id}`}>
        <Card
          hoverable
          className={style.book__card}
          cover={
            <img
              alt={title}
              src={imageLinks ? imageLinks.thumbnail : noPicture}
            />
          }
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

export default Book
