

export interface IAppResponse {
    "AppID": number;                    // Уникальный идентификатор приложения

    "AppName": string;                  // Название приложения
    "SmallIconID": string;              // ID маленькой иконки
    "BigIconID": string;                // ID большой иконки
    "AppCardScreenshotsIDs": string;    // ID скриншотов для карточки приложения
    "Categories": EnumCategories;       // Категория из перечисления
    "AgeRestriction": number;           // Возрастное ограничение ("0+", "6+", "12+", "16+", "18+")
    "Description": string;              // Описание приложения
    "DeveloperID": number;              // ID разработчика


    "Rating": number;                   // Рейтинг приложения (например, 4.5)
    "Downloads": number;                // Количество загрузок
    "DeveloperName": string;            // Имя разработчика
    "ReleaseDate": string;              // Дата релиза в формате ISO 8601
    "EditorChoice": number;             // Флаг выбора редактора (0/1 или 0/100)
    "SimilarApps": string;              // Список похожих приложений (возможно, JSON строка или IDs)
}

export type TypeAppFormCreate = Omit<IAppResponse, "AppID"> & {
    CommentListID: number;
};

export type TypeAppFormUpdate = Partial<TypeAppFormCreate>;

export enum EnumCategories {
    sport = "спорт",
    games = "Игры",
    politics = "Политика",
    culture = "Культура",
    strategy = "Стратегия"
}
