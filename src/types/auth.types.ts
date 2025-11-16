export interface ILoginForm {
	email: string
	password: string
}

export interface IRegisterForm extends ILoginForm{
    email: string,
    password: string,
    password2: string,
    first_name: string,
    last_name: string

}




export interface IUser {
    "id": number,
    "email": string,
    "first_name": string,
    "last_name": string,
    "is_email_verified": boolean,
}

export interface IAuthResponse {
    access_token: string,
    refresh_token: string,
    token_type: string,
	user: IUser
}

export interface DataResponse {
    "responce_code": number,
    "data":IAuthResponse
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
