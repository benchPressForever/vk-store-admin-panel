import "./HeaderStyle.css";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store";
import {setIsAuth} from "../../store/userReducer.ts";
import {Link} from "react-router-dom";
import {MAIN_ROUTE, MY_APPS_ROUTE} from "../../utils/constants.ts";


function Header (){

    const dispatch = useDispatch();
    const {IsAuth} = useSelector((state:RootState) => state.User)

    function auth(){
        dispatch(setIsAuth(true));
    }

    return (
        <div className="header">
            <div className="logo">
                <Link to = {MAIN_ROUTE}>
                    <img src="./img/vkstore.png" width={50} height={50} />
                </Link>
                <Link to = {MAIN_ROUTE}>
                    <span style={ {color:"#0077ff",fontSize:"large",fontWeight:"bold"}}>VkStore</span>
                    <span>developer</span>
                </Link>
            </div>
            <div className="actions">
                {IsAuth ?
                    <>
                        <Link to = {MY_APPS_ROUTE} >
                            Мои приложения
                        </Link>
                        <Link to = {MAIN_ROUTE}>Профиль</Link>
                    </>:
                    <p onClick={() => auth()}>Регистрация</p>
                }
            </div>
        </div>
    )
}

export default Header;