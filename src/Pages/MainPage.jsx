import About from "../Component/About/About";
import Contact from "../Component/Contact/Contact";
import Home from "../Component/Home/Home";
import Navbar from "../Component/Navbar/Navbar";
import Projects from "../Component/Projects/Projects";


const MainPage = () => {
    return (
        <div className="bg-white">
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            hello devloper hi iam want to new commit 
        </div>
    );
};

export default MainPage;