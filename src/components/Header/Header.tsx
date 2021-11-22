import React from 'react'
import { Button, Input } from 'antd'
import { CategoryBook } from '../CategoryBook/CategoryBook'
import { SortBooks } from '../SortBooks/SortBooks'
import style from './Header.module.scss'

interface HeaderProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  setInputValue: (value: string) => void
  setCategory: (value: string) => void
  sortedBooks: (value: string) => void
  inputValue: string
}

export const Header: React.FC<HeaderProps> = ({ handleSubmit, setInputValue, setCategory, sortedBooks, inputValue }) => {
  return (
    <header>
      <h1 className={style.title}>Поиск книги</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.search__book}>
          <Input
            pattern="^[^\s]+(\s.*)?$"
            title="Первый символ не может быть пробелом"
            placeholder="Введите название книги"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            className={style.input__search}
          />
          <Button
            type="primary"
            htmlType="submit"
            disabled={inputValue ? false : true}
          >
            Поиск
          </Button>
        </div>
      </form>
      <div className={style.container}>
        <div className={style.category__book}>
          <span>Категория</span>
          <CategoryBook setCategory={setCategory} />
        </div>
        <div className={style.sort__books}>
          <span>Сортировать</span>
          <SortBooks sortedBooks={sortedBooks} />
        </div>
      </div>
    </header>
  )
}
