import axios from 'axios'

const client = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    accept: 'application/json',
  },
  timeout: 5000,
})

export default client
