import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers"
import { applyMiddleware } from "redux"
import {thunk} from "redux-thunk"
// import logger from "redux-logger"

export const _STORE = configureStore({
    reducer: rootReducer,
}, applyMiddleware(thunk))
