
import { createAction, createReducer , type PayloadAction} from "@reduxjs/toolkit";
import type {IAppResponse} from "../types/app.types.ts";


export interface AppState {
  apps: IAppResponse[] | [];
}

const defaultState: AppState = {
    apps : []
}

export const setApps = createAction<IAppResponse[]>("SET_APPS");
export const addApps = createAction<IAppResponse>("ADD_APPS");

export const AppsReducer = createReducer(defaultState, (builder) => {
  builder
    .addCase(setApps, (state, action: PayloadAction<IAppResponse[]>) => {
      state.apps = action.payload;
    })
      .addCase(addApps, (state, action: PayloadAction<IAppResponse>) => {
          state.apps = [...state.apps, action.payload];
      })
});