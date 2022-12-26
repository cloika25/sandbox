import axios from 'axios'

export const createApi = (apiUrl: string) => axios.create({
  baseURL: apiUrl,
})