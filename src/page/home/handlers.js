import axios from "axios"
import { URL } from "../../config/url"
import short from "short-uuid"

export const getContributors = () => {
    axios.defaults.headers.common["Request_id"] = short().new()
    return axios.get(URL.OUTER.Contributors)
}