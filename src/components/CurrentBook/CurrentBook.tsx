import React from 'react'
import { Button } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import style from './CurrentBook.module.scss'
import { withError } from '../../hoc-helper/withError'
import { IBook } from '../../types/books'
import noImage from '../../assets/img/no-picture.png'

interface CurrentBookProps {
  books: IBook[]
}

interface CurrentBookParams {
  id: string
}

const CurrentBook: React.FC<CurrentBookProps> = ({ books }) => {
  const { id } = useParams() as CurrentBookParams

  const chooseBook = books && books.filter((el: any) => el.id === id)

  const navigate = useNavigate()
  
  const back = () => {
    navigate('/')
  }

  return (
    <>
      <Button onClick={back} style={{ display: 'flex', margin: '0 auto' }}>Назад</Button>
      {chooseBook.map((data, index: number) => (
        <div key={index} className={style.currentBook}>
          <div className={style.image__block}>
            <img src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : noImage} alt={data.volumeInfo.title} />
          </div>
          <div className={style.description}>
            <span className={style.categories}>{data.volumeInfo.categories}</span>
            <h2>{data.volumeInfo.title}</h2>
            <span className={style.authors}>{data.volumeInfo.authors}</span>
            <div className={style.description__block}>
              <p>{data.volumeInfo.description ? data.volumeInfo.description : 'Описание отсутствует'}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default withError(CurrentBook)