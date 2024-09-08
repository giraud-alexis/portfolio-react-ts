import { Outlet } from "react-router-dom";
import Header from "../components/app/header/Header";
import Footer from "../components/app/footer/Footer";

export default function Root () {
    return (
        <div className="container">
            <Header/>

            <main>
                <Outlet/>
            </main>

            <Footer/>
        </div>
    )
}