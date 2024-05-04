import axios from "axios";
import Cookies from "js-cookie"

const API_HOST = 'http://localhost:3000'

export const handleSignup = async (username: string, password: string) => {
    await axios.post(`${API_HOST}/register`, { username, password })
        .then(res => Cookies.set('token', 'Bearer ' + res.data.token))
}

export const handleLogin = async (username: string, password: string) => {
    await axios.post(`${API_HOST}/login`, { username, password })
        .then(res => Cookies.set('token', 'Bearer ' + res.data.token))
}

export async function getUserInfo() {
    return await axios.get(`${API_HOST}/user/info`, {
        headers: {
            Authorization: Cookies.get('token')
        }
    })
}