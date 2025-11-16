import "./HeaderStyle.css";
import {useSelector} from "react-redux";
import type {RootState} from "../../store";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE, MY_APPS_ROUTE} from "../../utils/constants.ts";

function Header (){

    const {IsAuth} = useSelector((state:RootState) => state.User)

    return (
        <div className="header">
            <div className="logo">
                <Link to = {MAIN_ROUTE}>
                    <img src="./img/vkstore.png" width={50} height={50} alt="VK Store Logo" />
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
                    </>:
                    <Link to = {LOGIN_ROUTE}>Login</Link>
                }
            </div>
        </div>
    )
}

export default Header;