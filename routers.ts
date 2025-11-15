import {
    APP_CREATE_ROUTE,
    APP_UPDATE_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    MY_APPS_ROUTE,
    REGISTER_ROUTE
} from "./src/utils/constants";

import {MainPage} from "./src/pages/Main/MainPage";
import {LoginPage} from "./src/pages/LoginPage/LoginPage";
import {RegisterPage} from "./src/pages/RegisterPage/RegisterPage";
import {MyApps} from "./src/pages/MyApps/MyApps";
import {AppCreatePage} from "./src/pages/AppCreatePage/AppCreatePage";
import {AppUpdatePage} from "./src/pages/AppUpdatePage/AppUpdatePage";


export const publicRouters = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTER_ROUTE,
    Component: RegisterPage,
  }
]

export const authRouters = [
    {
        path: MAIN_ROUTE,
        Component: MainPage,
    },
  {
    path: MY_APPS_ROUTE,
    Component: MyApps,
  },
    {
    path: APP_CREATE_ROUTE,
    Component: AppCreatePage,
  },
    {
    path: APP_UPDATE_ROUTE,
    Component: AppUpdatePage,
  },
]