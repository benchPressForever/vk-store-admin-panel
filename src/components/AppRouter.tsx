import { Route, Routes } from "react-router-dom";
import {authRouters, publicRouters} from "../../routers.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../store";
import {Info} from "./InfoBlock/Info.tsx";
import {MAIN_ROUTE} from "../utils/constants.ts";

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

            <Route path="*" element = {
                <div style = {{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",paddingTop:"10%"}}>
                        <Info title = {"Или перешли по несуществующей ссылке :("}
                              description = {"Вы не зарегистрировались"}
                              imageUrl = {"/img/image.png"}
                              width = {70}
                              height = {70}
                              navigateTo = {MAIN_ROUTE}/>
                </div>
            }
            />
        </Routes>
    );
}