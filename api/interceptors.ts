import axios, { type CreateAxiosDefaults } from 'axios'



const options: CreateAxiosDefaults = {
    baseURL: 'https://commit-store.ru/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)



export { axiosClassic, axiosWithAuth }
