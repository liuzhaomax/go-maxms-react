import axios from "axios"
import { URL } from "../../config/url"

export const getContributors = () => {
    return axios.get(URL.OUTER.Contributors)
}