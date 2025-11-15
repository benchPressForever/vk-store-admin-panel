import "./AppCreatePageStyle.css";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store";
import {EnumCategories, type TypeAppFormCreate} from "../../types/app.types.ts";
import {appService} from "../../services/app.service.ts";
import { useMutation } from '@tanstack/react-query';
import {addApps} from "../../store/appsReducer.ts";
import {useState} from "react";
import {fileService} from "../../services/file.service.ts";
import {useNavigate} from "react-router";
import {MAIN_ROUTE, MY_APPS_ROUTE} from "../../utils/constants.ts";



export const AppCreatePage = () => {

    const navigate = useNavigate();
    const {User} = useSelector((state:RootState) => state.User);
    const dispatch = useDispatch();

    const [isSmallIconUploaded, setIsSmallIconUploaded] = useState(false);
    const [isBigIconUploaded, setIsBigIconUploaded] = useState(false);
    const [isApkUploaded, setIsApkUploaded] = useState(false);
    const [isScreenshotsUploaded, setIsScreenshotsUploaded] = useState(false);

    console.log(isSmallIconUploaded , isBigIconUploaded,isApkUploaded,isScreenshotsUploaded);

    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        reset,
        setValue,
        trigger
    } = useForm<TypeAppFormCreate>({
        mode: 'onChange',
        defaultValues: {
            DeveloperID : 1,
            Categories  : EnumCategories.games,
            AgeRestriction : 1,
            Description: "",
            CommentListID : 1,
            EditorChoice: 0,
            SimilarApps: "",
            ReleaseDate: new Date().toISOString(),
            Rating: 0,
            Downloads: 0,
            SmallIconID:"1",
            BigIconID: "1",
            AppCardScreenshotsIDs: "1",

        }
    });


    const { mutate, isPending } = useMutation({
        mutationKey: ['app_create'],
        mutationFn: (data: TypeAppFormCreate) => appService.create(data),
        onSuccess(data) {
            reset();
            dispatch(addApps(data));
        },
        onError(error) {
            console.error('App create error:', error.message);
            console.log(error)
        }
    });


    const onSubmit = (data: TypeAppFormCreate) => {
        mutate(data);
    };



    async function onChangeSmallImg(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const {data} = await fileService.uploadImg(file);
            setValue("SmallIconID", String(data?.id));
            trigger("SmallIconID");
            setIsSmallIconUploaded(true);
            console.log(data?.id);
        }
    }

    async function onChangeBigImg(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const {data}  = await fileService.uploadImg(file);
            setValue("BigIconID", String(data?.id));
            trigger("BigIconID");
            setIsBigIconUploaded(true);
            console.log(data?.id);
        }
    }

    async function onChangeScreenshotImg(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const {data}  = await fileService.uploadImg(file);
            setValue("AppCardScreenshotsIDs", String(data?.id));
            trigger("AppCardScreenshotsIDs");
            setIsScreenshotsUploaded(true);
            console.log(data?.id);
        }
    }


    async function onChangeApk(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const {data} = await  fileService.uploadApk(file);
            setIsApkUploaded(true);
            console.log(data.id);
        }
    }



    return (
        <div className="MainDiv">
            <h2>Создание приложения</h2>
            <div className="ACContainer">
                <div className="firstBlock">

                    <div className="item">
                        <h3>Основная информация</h3>
                        <Controller
                            name="AppName"
                            control={control}
                            rules={{
                                required: 'Название не должно быть пустым '
                            }}
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <label>Название приложения</label>
                                    <input
                                        placeholder = "Введите название приложения"
                                        type="text"
                                        onChange={onChange}
                                        value={value}
                                    />
                                    <div className="errorDiv">{errors.AppName?.message}</div>
                                </>
                            )}
                        />
                        <Controller
                            name="DeveloperName"
                            control={control}
                            rules={{
                                required: 'Поле имя разработчика не должно быть пустым '
                            }}
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <label>Разработчик</label>
                                    <input
                                        placeholder = "Введите имя разработчика или название компании"
                                        type="text"
                                        onChange={onChange}
                                        value={value}
                                    />
                                    <div className="errorDiv">{errors.DeveloperName?.message}</div>
                                </>
                            )}
                        />


                        <Controller
                            name="Categories"
                            control={control}
                            rules={{
                                required: 'Поле категория не должно быть пустым '
                            }}
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <label>Категория</label>
                                    <select onChange={onChange} value={value} style = {{width:"99%"}}>
                                        <option value={EnumCategories.sport}>Спорт</option>
                                        <option value={EnumCategories.games}>Игры</option>
                                    </select>
                                    <div className="errorDiv">{errors.Categories?.message}</div>
                                </>
                            )}
                        />


                        <Controller
                            name="AgeRestriction"
                            control={control}
                            rules={{
                                required: 'Поле возрастное ограничение не должно быть пустым '
                            }}
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <label>Возрастное ограничение</label>
                                    <select onChange={onChange} value={value} style = {{width:"99%"}}>
                                        <option value={0}>0+</option>
                                        <option value={3}>3+</option>
                                        <option value={6}>6+</option>
                                        <option value={12}>12+</option>
                                        <option value={16}>16+</option>
                                        <option value={18}>18+</option>
                                    </select>
                                    <div className="errorDiv">{errors.AgeRestriction?.message}</div>
                                </>
                            )}
                        />
                    </div>

                    <div className="item">
                        <h3>Описание приложения</h3>
                        <Controller
                            name="Description"
                            control={control}
                            rules={{
                                required: 'Описание не должно быть пустым',
                                minLength: {
                                    value: 10,
                                    message: 'Описание должно содержать минимум 10 символов'
                                },
                                maxLength: {
                                    value: 2000,
                                    message: 'Описание не должно превышать 2000 символов'
                                }
                            }}
                            render={({ field: { onChange, value,ref } }) => (
                                <>
                                    <label>Описание</label>
                                    <textarea
                                        ref={ref}
                                        value={value}
                                        onChange={onChange}
                                        rows={6}
                                        placeholder="Подробное описание функций, возможностей и особенностей приложения..."
                                    />
                                    <div className="errorDiv">{errors.Description?.message}</div>
                                </>
                            )}
                        />
                    </div>
                </div>

                <div className="lastBlock">
                    <div className="item">
                        <h3>Изображения вашего приложения</h3>
                                    <label>Маленькая иконка</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => onChangeSmallImg(e)}
                                        className="hidden"
                                    />
                                    <label>Большая иконка</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => onChangeBigImg(e)}
                                        className="hidden"
                                    />
                                    <label>Скриншот</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => onChangeScreenshotImg(e)}
                                        className="hidden"
                                    />

                    </div>
                    <div className="item">
                            <h3>Файл Apk</h3>
                            <input
                                type="file"
                                accept="apk/*"
                                onChange={(e) => onChangeApk(e)}
                                className="hidden"
                            />
                    </div>
                    <div className="buttonDiv">
                        <button onClick={() => navigate(MY_APPS_ROUTE)} className="exitButton" >
                            Назад
                        </button>
                        <button
                            onClick={handleSubmit(onSubmit)}
                            disabled={!isValid || isSubmitting ||
                                !isApkUploaded || !isBigIconUploaded
                                || !isScreenshotsUploaded || !isSmallIconUploaded}
                            className={`submit-button ${(!isValid || isSubmitting) ? 'submit-button--disabled' : ''}`}
                        >
                            {isSubmitting ? 'Создание...' : 'Создать'}
                        </button>

                    </div>

                </div>

            </div>
        </div>
    )
}

