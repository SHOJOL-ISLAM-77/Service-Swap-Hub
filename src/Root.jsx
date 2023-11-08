import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { motion } from "framer-motion"
import { useScroll } from "framer-motion";
import "./styles.css";


const Root = () => {
    const { scrollYProgress } = useScroll();
    return ( <>
        <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
        />
        <Navbar>
            <div className="font-OpenSans">
                <Outlet />
                <Footer/>
            </div>
        </Navbar>
        </>
    );
};

export default Root;