import axios from 'axios';

const apiDistance = axios.create({
    baseURL: 'http://localhost:3333'
})

export default apiDistance;