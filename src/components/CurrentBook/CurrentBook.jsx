import { Button } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './CurrentBook.module.scss'

export const CurrentBook = ({ books }) => {
  const { id } = useParams()

  const chooseBook = books && books.filter((el) => el.id === id)

  const navigate = useNavigate()
  
  const back = () => {
    navigate('/')
  }

  return (
    <>
      <Button onClick={back}>Назад</Button>
      {chooseBook.map((data, index) => (
        <div key={index} className={style.currentBook}>
          <div className={style.image__block}>
            <img src={data.volumeInfo.imageLinks.thumbnail} alt="" />
          </div>
          <div className={style.description}>
            <span className={style.categories}>{data.volumeInfo.categories}</span>
            <h2>{data.volumeInfo.title}</h2>
            <span className={style.authors}>{data.volumeInfo.authors}</span>
            <div className={style.description__block}>
              <p>{data.volumeInfo.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
