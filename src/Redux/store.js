import { configureStore } from "@reduxjs/toolkit";
import  sideBarTrueFalseReducer  from "../sideBarTrueFalse"


export const store = configureStore ({
 reducer : {
    TrueFalse:sideBarTrueFalseReducer,
 },

})