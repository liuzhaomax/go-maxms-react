import React from "react"
// import {Suspense} from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../page/index/Index"
import NotFound from "../page/notFound/NotFound"
// import Home from "../pages/home/Home"
// import HomeLayout from "../layouts/HomeLayout"
// import { HOME } from "../config/cstModule"

// const lazyLoad = path => {
//     const Comp = React.lazy(() => import(`../${path}`))
//     return (
//         <Suspense fallback={<>加载中...</>}>
//             <Comp />
//         </Suspense>
//     )
// }

export default (
    <Routes>
        <Route path="/" element={<Index/>}/>
        {/*<Route element={<HomeLayout/>}>*/}
        {/*    <Route path={HOME.PATH} element={<Home/>}/>*/}
        {/*    <Route path="/room/:roomId" element={lazyLoad("pages/room/Room")}/>*/}
        {/*    <Route path="/game/:roomId" element={lazyLoad("pages/gaming/Gaming")}/>*/}
        {/*    <Route path="/review/:roomId" element={lazyLoad("pages/review/Review")}/>*/}
        {/*</Route>*/}
        <Route path="*" element={<NotFound/>}/>
    </Routes>
)