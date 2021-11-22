import { BooksAction, BooksActionType, BooksState } from '../../types/books'

const initialState: BooksState = {
  books: [],
  countBooks: 0,
  loading: false,
  error: false,
  error_message: '',
}

export const booksReducer = (state = initialState, action: BooksAction): BooksState => {
  switch (action.type) {
    case BooksActionType.BOOKS:
      return { ...state, books: [...action.payload] }
    case BooksActionType.LOAD_MORE:
      return { ...state, books: [...state.books, ...action.payload] }
    case BooksActionType.COUNT_BOOK:
      return { ...state, countBooks: action.payload }
    case BooksActionType.LOADING:
      return { ...state, loading: action.payload }
    case BooksActionType.ERROR:
      return { ...state, error: action.payload }
    case BooksActionType.ERROR_MESSAGE:
      return { ...state, error_message: action.payload }
    default:
      return state
  }
}