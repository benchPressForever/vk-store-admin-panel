

export interface IAppResponse {
    "AppID": number;                    // Уникальный идентификатор приложения

    "AppName": string;                  // Название приложения
    "SmallIconID": number;              // ID маленькой иконки
    "BigIconID": number;                // ID большой иконки
    "AppCardScreenshotsIDs": number;    // ID скриншотов для карточки приложения
    "Rating": number;                   // Рейтинг приложения (например, 4.5)
    "Categories": EnumCategories;       // Категория из перечисления
    "AgeRestriction": string;           // Возрастное ограничение ("0+", "6+", "12+", "16+", "18+")
    "Description": string;              // Описание приложения
    "DeveloperID": number;              // ID разработчика

    "Downloads": number;                // Количество загрузок
    "DeveloperName": string;            // Имя разработчика
    "ReleaseDate": string;              // Дата релиза в формате ISO 8601
    "EditorChoice": number;             // Флаг выбора редактора (0/1 или 0/100)
    "SimilarApps": string;              // Список похожих приложений (возможно, JSON строка или IDs)
}

export type TypeAppFormCreate = Omit<IAppResponse,"AppID"|"Downloads"|"DeveloperName"|"ReleaseDate"|"EditorChoice"|"SimilarApps">;

export type TypeAppFormUpdate = Partial<TypeAppFormCreate>;

export enum EnumCategories {
    sport = "sport",
    games = "games"
}
