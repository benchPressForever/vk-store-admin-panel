import "./LoginPageStyle.css";
import {Controller, useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import type {IAuthResponse, ILoginForm} from "../../types/auth.types.ts";
import {useDispatch} from "react-redux";
import {setIsAuth, setUser} from "../../store/userReducer.ts";
import {authService} from "../../services/auth.service.ts";
import {useNavigate} from "react-router";
import {MAIN_ROUTE} from "../../utils/constants.ts";


export const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        reset,
    } = useForm<ILoginForm>({
        mode: 'onChange',
        defaultValues: {
            email:"",
            password:"",
        }
    });


    const { mutate} = useMutation({
        mutationKey: ['login'],
        mutationFn: (data: ILoginForm) =>  authService.login(data),
        onSuccess(data:IAuthResponse) {
            reset();
            console.log("login success", data);
            dispatch(setUser(data.user));
            dispatch(setIsAuth(true))
            navigate(MAIN_ROUTE);
            alert("Вы успешно авторизировались!")
        },
        onError(error) {
            console.error('Login error:', error.message);
            console.log(error)
            alert(`${error.message}\nНеверный password или email!`);
        }
    });


    const onSubmit = (data: ILoginForm) => {
        mutate(data);
    };

    return (
        <div className="ContainerLogin">
            <div className="LoginDiv">
                <center><h3>Login</h3></center>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: 'Поле email не должно быть пустым',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Некорректный email адрес'
                        },
                        minLength: {
                            value: 5,
                            message: 'Email должен содержать минимум 5 символов'
                        }
                    }}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <label>Email</label>
                            <input
                                placeholder = "Введите email"
                                type="email"
                                onChange={onChange}
                                value={value}
                            />
                            <div className="errorDiv">{errors.email?.message}</div>
                        </>
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: 'Поле password не должно быть пустым',
                        minLength: {
                            value: 6,
                            message: 'Пароль должен содержать минимум 6 символов'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Пароль не должен превышать 20 символов'
                        }
                    }}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <label>Password</label>
                            <input
                                placeholder = "Введите password"
                                type="password"
                                onChange={onChange}
                                value={value}
                            />
                            <div className="errorDiv">{errors.password?.message}</div>
                        </>
                    )}
                />

                <button
                    onClick={handleSubmit(onSubmit)}
                    disabled={!isValid || isSubmitting}
                    className={`submit-button ${(!isValid || isSubmitting) ? 'submit-button--disabled' : ''}`}
                >
                    {isSubmitting ? 'Login...' : 'Login'}
                </button>
            </div>
        </div>
    )
}