import React from "react"
import "./App.css"
import {ConfigProvider} from "antd"
import {BrowserRouter as Router} from "react-router-dom"
import routes from "./routes"

const App = () => (
    <div id="App" className="App">
        <ConfigProvider theme={{ token: { colorPrimary: "#338e6c" } }}>
            <Router>{ routes }</Router>
        </ConfigProvider>
    </div>
)

export default App
