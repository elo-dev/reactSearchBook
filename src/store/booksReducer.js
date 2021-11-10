import { getResponse } from '../network/api'

const BOOKS = 'BOOKS'
const LOADING = 'LOADING'
const COUNT_BOOK = 'COUNT_BOOK'
const LOAD_MORE = 'LOAD_MORE'

const initialState = {
    books: [],
    countBooks: 0,
    loading: false
}

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS:
            return {...state, books: [...action.payload]}
        case LOAD_MORE: 
            return {...state, books: [...state.books, ...action.payload]}
        case COUNT_BOOK: 
            return {...state, countBooks: action.payload}
        case LOADING:
            return {...state, loading: action.payload}
        default:
            return state
    }
}

export const setLoadingAction = (payload) => ({type: LOADING, payload})
export const setBooks = (payload) => ({type: BOOKS, payload})
export const setLoadMore = (payload) => ({type: LOAD_MORE, payload})
export const setCountBooks = (payload) => ({type: COUNT_BOOK, payload})

export const requestBooks = (search) => async (dispatch) => {
    dispatch(setLoadingAction(true))
    let data = await getResponse(search)
    dispatch(setBooks(data.items))
    dispatch(setCountBooks(data.totalItems))
    dispatch(setLoadingAction(false))
}

export const requestSortedBooks = (url) => async (dispatch) => {
    dispatch(setLoadingAction(true))
    let data = await getResponse(url)
    dispatch(setBooks(data.items))
    dispatch(setLoadingAction(false))
}

export const requestLoadMore = (url) => async (dispatch) => {
    dispatch(setLoadingAction(true))
    let data = await getResponse(url)
    dispatch(setLoadMore(data.items))
    dispatch(setLoadingAction(false))
}