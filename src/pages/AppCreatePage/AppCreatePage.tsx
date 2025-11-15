import "./AppCreatePageStyle.css";
/*
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store";
import {EnumCategories, type TypeAppFormCreate} from "../../types/app.types.ts";
import {appService} from "../../services/app.service.ts";
import { useMutation } from '@tanstack/react-query';
import {addApps} from "../../store/appsReducer.ts";*/


export const AppCreatePage = () => {

    /*
    const {User} = useSelector((state:RootState) => state.User);
    const dispatch = useDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm<TypeAppFormCreate>({
        mode: 'onChange',
        defaultValues: {
            DeveloperID : User?.id,
            Categories  : EnumCategories.games
        }
    });


    const { mutate, isPending } = useMutation({
        mutationKey: ['app_create'],
        mutationFn: (data: TypeAppFormCreate) => appService.create(data),
        onSuccess(data) {
            reset();

            dispatch(addApps(data));
            console.log(data);
        },
        onError(error) {
            console.error('Meal create error:', error.message);
            console.log(error)
        }
    });*/


    return (
        <div>
            <p>Создание приложения</p>

            {/*<Controller
                name="name"
                control={control}
                rules={{
                    required: 'Имя не должно быть пустым '
                }}
                render={({ field: { onChange, value } }) => (
                    <FormControl isInvalid={!!errors.name} size="md" className='mt-6'>
                        <FormControlLabel>
                            <FormControlLabelText>Название</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type= 'text'
                                placeholder="Введите название приёма пищи"
                                value={value}
                                onChangeText={onChange}
                                autoCapitalize="none"
                            />
                        </Input>
                        <FormControlError>
                            <FormControlErrorIcon as={CircleAlert} />
                            <FormControlErrorText>{errors.name?.message}</FormControlErrorText>
                        </FormControlError>
                    </FormControl>
                )}
            />*/}
        </div>
    )
}

