import React from "react"
import {Navigate} from "react-router-dom"
import {HOME} from "../../config/module"

const Index = () => (
    <Navigate to={HOME.FULL_PATH} replace/>
)

export default Index
