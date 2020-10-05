import axios from 'axios'

const baseURL = 'http://localhost:5000' // Point to the ip where mock-server is running
const client = axios.create({
    baseURL
})

export default client