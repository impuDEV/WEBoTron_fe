import {combineReducers} from "redux";
import {configReducer} from "@/redux/configReducer";

export const rootReducer = combineReducers({
    config: configReducer
})