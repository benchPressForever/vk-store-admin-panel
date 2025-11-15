import {configureStore } from "@reduxjs/toolkit";
import {UserReducer, type UserState} from "./userReducer.ts";
import {AppsReducer, type AppState} from "./appsReducer.ts";


export const store = configureStore({
    reducer:{
        User:UserReducer,
        Apps:AppsReducer,
    },
})

export interface RootState {
    User: UserState;
    Apps: AppState;
}