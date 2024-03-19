import axios from "axios"
import { URL } from "../../config/url"

export const getDemo = () => {
    return axios.get(URL.INNER.Demo)
}