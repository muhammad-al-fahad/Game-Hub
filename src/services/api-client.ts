import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '77d2294ad78c4ff1951136911e9bd2f3'
    }
})