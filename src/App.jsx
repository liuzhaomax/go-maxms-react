import React from "react"
import "./App.css"
import {Button, ConfigProvider} from "antd"

const App: React.FC = () => (
    <ConfigProvider theme={{ token: { colorPrimary: "#338e6c" } }}>
        <Button type="primary">abc</Button>
    </ConfigProvider>
)

export default App
