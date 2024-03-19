import React from "react"
import {Suspense} from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../page/index/Index"
import NotFound from "../page/notFound/NotFound"
import Home from "../page/home/Home"
import HomeLayout from "../layout/HomeLayout"
import { HOME, DEMO, PROJECT, ARTICLE } from "../config/module"
import {MAIN_LAYOUT} from "../config/layout"

const lazyLoad = path => {
    const Comp = React.lazy(() => import(`../${path}`))
    return (
        <Suspense fallback={<>加载中...</>}>
            <Comp />
        </Suspense>
    )
}

export default (
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route element={<HomeLayout/>}>
            <Route path={HOME.PATH} element={<Home/>}/>
        </Route>
        <Route element={lazyLoad(MAIN_LAYOUT.FILE_PATH)}>
            <Route path={ARTICLE.PATH} element={lazyLoad(ARTICLE.FILE_PATH)}/>
            <Route path={DEMO.PATH} element={lazyLoad(DEMO.FILE_PATH)}/>
            <Route path={PROJECT.PATH} element={lazyLoad(PROJECT.FILE_PATH)}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
)