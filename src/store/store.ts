import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { booksReducer } from "./reducers/booksReducer";

const rootReducer = combineReducers({
    booksReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof rootReducer>