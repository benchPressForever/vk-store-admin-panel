
import { createAction, createReducer , type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../types/auth.types.ts";


export interface UserState {
  User: IUser | undefined;
  IsAuth: boolean;
}

const defaultState: UserState = {
    IsAuth: false,
    User: undefined,
}

export const setIsAuth = createAction<boolean>("SET_IS_AUTH");
export const setUser = createAction<IUser>("SET_USER");

export const UserReducer = createReducer(defaultState, (builder) => {
  builder
    .addCase(setIsAuth, (state, action: PayloadAction<boolean>) => {
      state.IsAuth = action.payload;
    })
      .addCase(setUser, (state, action: PayloadAction<IUser>) => {
      state.User = action.payload;
    })
});