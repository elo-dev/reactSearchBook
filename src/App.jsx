import React, { useMemo, useState } from 'react'
import 'antd/dist/antd.css'
import './App.scss'
import { API_KEY, getResponse, getSortedBooks, MAX_RESULT, ORDER_BY, ROOT_API, START_INDEX } from './network/api'
import axios from 'axios'
import { Header } from './components/Header/Header'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Books } from './components/Books/Books'
import { CurrentBook } from './components/CurrentBook/CurrentBook'

const App = () => {
  const [books, setBooks] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [categoryValue, setCategory] = useState('')
  const [countBooks, setCountBooks] = useState(null)
  const [currentPage, setCurrentPage] = useState(30)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.length) {
      setLoading(true)
      const res = getResponse(ROOT_API + inputValue + MAX_RESULT + 30 + START_INDEX + 0 + API_KEY)
      res.then((data) => {
        setBooks(data.items)
        setCountBooks(data.totalItems)
        setLoading(false)
        navigate('/')
      })
    }
  }

  const sortedBooks = (value) => {
    setLoading(true)
    const res = getSortedBooks(ROOT_API + inputValue + MAX_RESULT + 30 + ORDER_BY + value + API_KEY)
    res.then((sorted) => {
      setBooks(sorted.items)
      setCurrentPage(30)
      setLoading(false)
      navigate('/')
    })
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
    setLoading(true)
    setCurrentPage(currentPage+30)
    axios.get(ROOT_API + inputValue + MAX_RESULT + 30 + START_INDEX + currentPage + API_KEY).then(res => {
      if(res.data.items){
        setBooks([...books, ...res.data.items])
        setLoading(false)
      }
    })
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
