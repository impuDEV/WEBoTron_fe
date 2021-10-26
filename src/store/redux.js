import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension";
import {configReducer} from "./configReducer";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    config: configReducer,
    cash: cashReducer,
    customers: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))