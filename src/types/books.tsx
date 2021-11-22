export enum BooksActionType {
  BOOKS = 'BOOKS',
  LOADING = 'LOADING',
  COUNT_BOOK = 'COUNT_BOOK',
  LOAD_MORE = 'LOAD_MORE',
  ERROR = 'ERROR',
  ERROR_MESSAGE = 'ERROR_MESSAGE',
}

interface FetchBooksAction {
  type: BooksActionType.BOOKS
  payload: any[]
}

interface FetchLoadingAction {
  type: BooksActionType.LOADING
  payload: boolean
}

interface FetchCountBookAction {
  type: BooksActionType.COUNT_BOOK
  payload: number
}

interface FetchLoadMoreAction {
  type: BooksActionType.LOAD_MORE
  payload: any[]
}

interface FetchErrorAction {
  type: BooksActionType.ERROR
  payload: boolean
}

interface FetchErrorMessageAction {
  type: BooksActionType.ERROR_MESSAGE
  payload: string
}

export type BooksAction =
  | FetchBooksAction
  | FetchLoadingAction
  | FetchCountBookAction
  | FetchLoadMoreAction
  | FetchErrorAction
  | FetchErrorMessageAction

export interface BooksState {
    books: any[]
    countBooks: number
    loading: boolean
    error: null | boolean
    error_message: null | string
}

interface VolumeInfo {
    title: string
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
    }
    authors: string
    categories: string
    description: string
  }
  
export interface IBook {
    id: number
    volumeInfo: VolumeInfo
  }

