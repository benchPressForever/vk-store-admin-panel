import "./MyAppsStyle.css";


export const MyApps = () => {
    return (
        <div>
            <div className="headerApps">
                <h2>Список приложений</h2>
                <button>Добавить приложение</button>
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
                        <tr>
                            <td>
                                <div className="app-info">
                                    <div className="app-icon">R
                                    </div>
                                </div>
                            </td>
                            <td><strong>RuTube</strong></td>
                            <td>ООО "Рутуб"</td>
                            <td><span className="status status-active">Активность</span></td>
                            <td>
                                <div className="actions">
                                    <button className="btn btn-delete"><i className="fas fa-trash"></i> Удалить</button>
                                    <button className="btn btn-edit"><i className="fas fa-edit"></i> Изменить</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="app-info">
                                    <div className="app-icon">Г
                                    </div>
                                </div>
                            </td>
                            <td><strong>Госуслуги</strong></td>
                            <td>Минцифры России</td>
                            <td><span className="status status-active">Активность</span></td>
                            <td>
                                <div className="actions">
                                    <button className="btn btn-delete"><i className="fas fa-trash"></i> Удалить</button>
                                    <button className="btn btn-edit"><i className="fas fa-edit"></i> Изменить</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="app-info">
                                    <div className="app-icon">С
                                    </div>
                                </div>
                            </td>
                            <td><strong>СберБанк Онлайн</strong></td>
                            <td>ПАО Сбербанк</td>
                            <td><span className="status status-active">Активность</span></td>
                            <td>
                                <div className="actions">
                                    <button className="btn btn-delete"><i className="fas fa-trash"></i> Удалить</button>
                                    <button className="btn btn-edit"><i className="fas fa-edit"></i> Изменить</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="app-info">
                                    <div className="app-icon">V
                                    </div>
                                </div>
                            </td>
                            <td><strong>VK Музыка</strong></td>
                            <td>ООО "В Контакте"</td>
                            <td><span className="status status-active">Активность</span></td>
                            <td>
                                <div className="actions">
                                    <button className="btn btn-delete"><i className="fas fa-trash"></i> Удалить</button>
                                    <button className="btn btn-edit"><i className="fas fa-edit"></i> Изменить</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="app-info">
                                    <div className="app-icon">Я
                                    </div>
                                </div>
                            </td>
                            <td><strong>Яндекс Карты</strong></td>
                            <td>ООО "Яндекс"</td>
                            <td><span className="status status-active">Активность</span></td>
                            <td>
                                <div className="actions">
                                    <button className="btn btn-delete"><i className="fas fa-trash"></i> Удалить</button>
                                    <button className="btn btn-edit"><i className="fas fa-edit"></i> Изменить</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="app-info">
                                    <div className="app-icon">M
                                    </div>
                                </div>
                            </td>
                            <td><strong>Mail.ru</strong></td>
                            <td>ООО "ВК"</td>
                            <td><span className="status status-active">Активность</span></td>
                            <td>
                                <div className="actions">
                                    <button className="btn btn-delete"><i className="fas fa-trash"></i> Удалить</button>
                                    <button className="btn btn-edit"><i className="fas fa-edit"></i> Изменить</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="app-info">
                                    <div className="app-icon">2
                                    </div>
                                </div>
                            </td>
                            <td><strong>2TMC</strong></td>
                            <td>ООО "ДубльГИС"</td>
                            <td><span className="status status-active">Активность</span></td>
                            <td>
                                <div className="actions">
                                    <button className="btn btn-delete"><i className="fas fa-trash"></i> Удалить</button>
                                    <button className="btn btn-edit"><i className="fas fa-edit"></i> Изменить</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="app-info">
                                    <div className="app-icon">H
                                    </div>
                                </div>
                            </td>
                            <td><strong>HeadHunter</strong></td>
                            <td>АО "Хадхантер"</td>
                            <td><span className="status status-active">Активность</span></td>
                            <td>
                                <div className="actions">
                                    <button className="btn btn-delete"><i className="fas fa-trash"></i> Удалить</button>
                                    <button className="btn btn-edit"><i className="fas fa-edit"></i> Изменить</button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="stats">
                    <div className="stat-card">
                        <div className="stat-value">8</div>
                        <div className="stat-label">Всего приложений</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">8</div>
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
