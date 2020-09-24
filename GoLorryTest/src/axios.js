import axios from 'axios'

const baseURL = 'http://192.168.0.133:5000'
const client = axios.create({
    baseURL
})

export default client