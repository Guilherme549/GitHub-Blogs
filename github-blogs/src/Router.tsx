import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layoults/DefaultLayout"
import { BlogProfile } from "./pages/BlogProfile"
import { PostContent } from "./pages/PostContent"

export function Router(){
    return (
        <Routes>
            <Route path="/" element={ <DefaultLayout />}>
                <Route path="/" element={ <BlogProfile />} />
                <Route path="/post" element={ <PostContent />}/>
            </Route>
        </Routes>
    )
}