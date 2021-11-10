import axios from 'axios'

export const ROOT_API = 'https://www.googleapis.com/books/v1/volumes?q='
export const API_KEY = '&key=AIzaSyBaOeJ0TqmIIt_DwOvSKPvlcJiZR-ZSczA'
export const ORDER_BY = '&orderBy='
export const MAX_RESULT = '&maxResults='
export const START_INDEX = '&startIndex='

export const getResponse = (search) => {
  const res = axios.get(search).then((res) => {
    return res.data
  })
  return res
}

export const getSortedBooks = async (value) => {
  const res = await axios.get(value).then((res) => {
    return res.data
  })
  return res
}
