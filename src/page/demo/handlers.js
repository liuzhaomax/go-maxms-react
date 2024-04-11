import axios from "axios"
import { URL } from "../../config/url"
import short from "short-uuid"

export const getDemo = () => {
    axios.defaults.headers.common["Request_id"] = short().new()
    return axios.get(URL.INNER.Demo)
}