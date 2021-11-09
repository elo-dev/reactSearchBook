import React from 'react'
import { Button, Input } from 'antd'
import { CategoryBook } from '../CategoryBook/CategoryBook'
import { SortBooks } from '../SortBooks/SortBooks'

export const Header = ({ handleSubmit, setInputValue, setCategory, sortedBooks, inputValue }) => {
  return (
    <header>
      <h1 className="title">Поиск книги</h1>
      <form onSubmit={handleSubmit}>
        <div className="search__book">
          <Input
            pattern="^[^\s]+(\s.*)?$"
            title="Первый символ не может быть пробелом"
            placeholder="Введите название книги"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ maxWidth: 500 }}
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
      <div className="container">
        <div className="category__book">
          <span>Категория</span>
          <CategoryBook setCategory={setCategory} />
        </div>
        <div className="sort__books">
          <span>Сортировать</span>
          <SortBooks sortedBooks={sortedBooks} />
        </div>
      </div>
    </header>
  )
}
