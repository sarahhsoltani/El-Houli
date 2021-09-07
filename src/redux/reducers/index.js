import { combineReducers } from "redux";
import alertReducer from "./alert"
import authReducer from "./authentification"
import userReducer from "./users"
import productReducer from "./productReducer"
import addToCards from "./addToCardReducers"
import {contactReducer} from "./contactReducer"
export const rootReducer = combineReducers({
    authReducer,
    alertReducer,
    userReducer,
    productReducer,
    addToCards,
    contactReducer
})