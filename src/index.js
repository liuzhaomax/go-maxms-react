import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./app/App"
import { Provider } from "react-redux"
import { _STORE } from "./state/store"
import initAxios from "./config/axios"

// https upgrading config
if (process.env.NODE_ENV === "production") {
    const head = document.getElementsByTagName("head")[0]
    const https = document.createElement("meta")
    https.setAttribute("http-equiv", "Content-Security-Policy")
    https.setAttribute("content", "upgrade-insecure-requests")
    head.appendChild(https)
}

// init axios
initAxios()

createRoot(document.getElementById("root")).render(
    <Provider store={_STORE}>
        <App store={_STORE} />
    </Provider>
)
