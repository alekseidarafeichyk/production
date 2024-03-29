import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage'

export const $api = axios.create({
    baseURL: 'http://localhost:8001/',
    headers: {
        Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})
