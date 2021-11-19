import React, { useMemo, useState } from 'react'
import 'antd/dist/antd.css'
import './App.scss'
import { API_KEY, MAX_RESULT, ORDER_BY, ROOT_API, START_INDEX } from './network/api'
import { Header } from './components/Header/Header'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Books } from './components/Books/Books'
import { CurrentBook } from './components/CurrentBook/CurrentBook'
import { requestBooks, setLoadingAction, requestLoadMore, requestSortedBooks } from './store/booksReducer'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [categoryValue, setCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(30)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const loading = useSelector(state => state.booksReducer.loading)
  const books = useSelector(state => state.booksReducer.books)
  const countBooks = useSelector(state => state.booksReducer.countBooks)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.length) {
      dispatch(requestBooks(ROOT_API + inputValue + MAX_RESULT + 30 + START_INDEX + 0 + API_KEY))
      navigate('/')
    }
  }

  const sortedBooks = (value) => {
    if(books.length){
      dispatch(setLoadingAction(true))
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
