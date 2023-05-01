import axios from 'axios'

export const baseURL = 'https://pokeapi.co/api/v2'

const api = axios.create({
    baseURL
})

export default api