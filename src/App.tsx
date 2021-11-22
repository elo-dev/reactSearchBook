import React, { useMemo, useState } from 'react'
import 'antd/dist/antd.css'
import { API_KEY, MAX_RESULT, ORDER_BY, ROOT_API, START_INDEX } from './network/api'
import { Header } from './components/Header/Header'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Books from './components/Books/Books'
import CurrentBook from './components/CurrentBook/CurrentBook'
import { requestBooks, requestLoadMore, requestSortedBooks } from './store/actionCreator/books'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from './hooks/useTypedSelector'
import './App.scss'

const App = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [categoryValue, setCategory] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(30)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { loading, books, countBooks } = useTypedSelector(state => state.booksReducer)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputValue.length) {
      dispatch(requestBooks(ROOT_API + inputValue + MAX_RESULT + 30 + START_INDEX + 0 + API_KEY))
      navigate('/')
    }
  }

  const sortedBooks = (value: string) => {
    if(books.length){
      dispatch(requestSortedBooks(ROOT_API + inputValue + MAX_RESULT + 30 + ORDER_BY + value + API_KEY))
      navigate('/')
    }
  }

  const filtredBooks = useMemo(
    () =>
      [...books].filter((category) => {
        if(category.volumeInfo.categories){
          return category.volumeInfo.categories.toString() === categoryValue
        }
      }),
    [categoryValue, books]
  )

  const loadMore = () => {
    setCurrentPage(currentPage+30)
    dispatch(requestLoadMore(ROOT_API + inputValue + MAX_RESULT + 30 + START_INDEX + currentPage + API_KEY))
  }

  return (
    <div className="App">
      <Header setInputValue={setInputValue} 
                setCategory={setCategory}
                handleSubmit={handleSubmit}
                sortedBooks={sortedBooks}
                inputValue={inputValue} />
        <Routes>
          <Route path='/' element={<Books
                loadMore={loadMore}
                inputValue={inputValue}
                filtredBooks={filtredBooks}
                countBooks={countBooks}
                books={books}
                loading={loading}
                />} />
          <Route path='/book/:id' element={<CurrentBook books={books} inputValue={inputValue} />} />
        </Routes>
    </div>
  )
}

export default App