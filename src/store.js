import {applyMiddleware, combineReducers, createStore} from "redux";
import countReducer from "./features/counterSlice.js";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    count: countReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;