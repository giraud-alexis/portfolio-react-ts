import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";

import Homepage from "../components/pages/home/Homepage";
import Projects from "../components/pages/projects/Projects";
import About from "../components/pages/about/AboutMe";

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}