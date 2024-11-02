

import About from "../Component/About/About";
import Service from "../Component/About/Service";
import Home2 from "../Component/Home/Home2";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const MainPage = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Home2></Home2>
            <Service></Service>
            <About></About>

            i am fro
        </div>
    );
};

export default MainPage;