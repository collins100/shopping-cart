import axios from "axios";

const TIMEOUT = 1000

export default {
    getProducts: (cb, timeout) => setTimeout(() => axios.get(`/get-items`).then(res => cb(res.data)), timeout || TIMEOUT),
    buyProducts: (items, cb, timeout) => setTimeout(() => axios.post(`/checkout`, { items }).then(res => cb(res)), timeout || TIMEOUT)
}