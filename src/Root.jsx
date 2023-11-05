import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const Root = () => {
    return (
        <Navbar>
            <div className="font-OpenSans">
                <Outlet />
                <Footer/>
            </div>
        </Navbar>
    );
};

export default Root;