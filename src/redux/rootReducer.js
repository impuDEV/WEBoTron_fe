import {combineReducers} from "redux";
import {configReducer} from "@/redux/configReducer";
import {appReducer} from "@/redux/appReducer";

export const rootReducer = combineReducers({
    config: configReducer,
    app: appReducer
})