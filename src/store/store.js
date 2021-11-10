import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { booksReducer } from "./booksReducer";

const rootReducer = combineReducers({
    booksReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))