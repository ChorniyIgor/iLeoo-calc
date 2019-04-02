import { combineReducers } from "redux";
import app from "./reducers/app";
import wordsCounter from "./reducers/wordsCounter";
import languages from "./reducers/languages";
import price from "./reducers/price";
import userInfo from "./reducers/userInfo";

export default combineReducers({ app, wordsCounter, languages, price, userInfo });
