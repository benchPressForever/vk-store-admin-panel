import "./MyAppsStyle.css";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store";
import type {IAppResponse} from "../../types/app.types.ts";
import {useEffect} from "react";
import {appService} from "../../services/app.service.ts";
import {setApps} from "../../store/appsReducer.ts";
import {useNavigate} from "react-router";
import {APP_CREATE_ROUTE, APP_UPDATE_ROUTE} from "../../utils/constants.ts";


export const MyApps = () => {

    const {apps} = useSelector((state:RootState) => state.Apps);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const getApps = async () => {
            const {data} = await appService.getAll();
            console.log(data);
            dispatch(setApps(data));
            console.log(data);
        }
        getApps();
    },[]);

    return (
        <div>
            <div className="headerApps">
                <h2>Список приложений</h2>
                <button onClick={() => navigate(APP_CREATE_ROUTE)}>
                    Добавить приложение
                </button>
            </div>

            <div>
                <div>
                    <div className="search">

                    </div>
                    <div className="categorySelect">

                    </div>
                </div>

                <div className="apps-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Иконка</th>
                            <th>Название Приложения</th>
                            <th>Разработчик</th>
                            <th>Активность</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {apps.length > 0 &&
                            apps.map((app: IAppResponse) => {
                                return (
                                    <tr key={app.AppID}>
                                        <td>
                                            <div className="app-info">
                                                <div className="app-icon">
                                                    {app.AppName.charAt(0)}
                                                </div>
                                            </div>
                                        </td>
                                        <td><strong>{app.AppName}</strong></td>
                                        <td>{app.DeveloperName}</td>
                                        <td><span className="status status-active">Активно</span></td>
                                        <td>
                                            <div className="actions">
                                                <button className="btn btn-delete">
                                                    <i className="fas fa-trash"></i> Удалить
                                                </button>
                                                <button
                                                    className="btn btn-edit"
                                                    onClick={() => navigate(APP_UPDATE_ROUTE)}>
                                                    <i className="fas fa-edit"></i> Изменить
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>

                <div className="stats">
                    <div className="stat-card">
                        <div className="stat-value">{apps.length}</div>
                        <div className="stat-label">Всего приложений</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{apps.length}</div>
                        <div className="stat-label">Активных</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">0</div>
                        <div className="stat-label">Неактивных</div>
                    </div>
                </div>

                <footer>
                    <p>Система управления приложениями &copy; 2025</p>
                </footer>
            </div>

        </div>
    )
}
