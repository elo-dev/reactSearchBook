import { Dispatch } from "redux"
import { getResponse } from "../../network/api"
import { BooksAction, BooksActionType } from "../../types/books"

export const requestBooks = (search: string) => async (dispatch: Dispatch<BooksAction>) => {
  try {
    dispatch({ type: BooksActionType.LOADING, payload: true})
    let data = await getResponse(search)
    dispatch({ type: BooksActionType.BOOKS, payload: data.items })
    dispatch({ type: BooksActionType.COUNT_BOOK, payload: data.totalItems})
    dispatch({ type: BooksActionType.LOADING, payload: false})
  } catch (error) {
    dispatch({ type: BooksActionType.ERROR, payload: true})
    dispatch({ type: BooksActionType.ERROR_MESSAGE, payload: (error as Error).message })
    dispatch({ type: BooksActionType.LOADING, payload: false})
  }
}

export const requestSortedBooks = (url: string) => async (dispatch: Dispatch<BooksAction>) => {
  try {
    dispatch({ type: BooksActionType.LOADING, payload: true})
    let data = await getResponse(url)
    dispatch({ type: BooksActionType.BOOKS, payload: data.items })
    dispatch({ type: BooksActionType.LOADING, payload: false})
  } catch (error) {
    dispatch({ type: BooksActionType.ERROR, payload: true})
    dispatch({ type: BooksActionType.ERROR_MESSAGE, payload: (error as Error).message })
    dispatch({ type: BooksActionType.LOADING, payload: false})
  }
}

export const requestLoadMore = (url: string) => async (dispatch: Dispatch<BooksAction>) => {
  try {
    dispatch({ type: BooksActionType.LOADING, payload: true})
    let data = await getResponse(url)
    dispatch({ type: BooksActionType.LOAD_MORE, payload: data.items})
    dispatch({ type: BooksActionType.LOADING, payload: false})
  } catch (error) {
    dispatch({ type: BooksActionType.ERROR, payload: true})
    dispatch({ type: BooksActionType.ERROR_MESSAGE, payload: (error as Error).message })
    dispatch({ type: BooksActionType.LOADING, payload: false})
  }
}
