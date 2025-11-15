import { Route, Routes } from "react-router-dom";
import {authRouters, publicRouters} from "../../routers.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../store";


export function AppRouter() {
    const { IsAuth } = useSelector((state:RootState) => state.User);

    return (
        <Routes>
            {IsAuth ?
                authRouters.map(({path,Component}) =>
                    <Route key = {path} path = {path} element = {<Component/>}/>
                )
            :
                publicRouters.map(({path,Component}) =>
                    <Route key = {path} path = {path} element = {<Component/>}/>
                )
            }
        </Routes>
    );
}