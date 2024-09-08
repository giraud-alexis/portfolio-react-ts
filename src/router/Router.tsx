import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";

import Homepage from "../components/pages/home/Homepage";

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root/>}>
                    <Route index element={<Homepage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}