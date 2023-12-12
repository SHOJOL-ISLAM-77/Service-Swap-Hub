/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import logo from "../assets/logo.png"


const Navbar = ({ children }) => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const photo = user?.photoURL;
    const name = user?.displayName;
    const email = user?.email;


    const handleSingOut = () => {
        logOut()
            .then(
                navigate('/')
            )
            .catch()
    }

    const navLinks = (
        <>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "mr-5 italic pb-1 border-b-[1px] border-black" : "mr-5 lg:my-0 my-3"} to="/">
                Home
            </NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active mr-5 italic pb-1 border-b-[1px] border-black" : "mr-5 lg:my-0 my-3"} to="/services">
                All Services
            </NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active mr-5 italic pb-1 border-b-[1px] border-black" : "mr-5 lg:my-0 my-3"} to="/contact">
                Contact Us
            </NavLink>

            {user ? (
                <>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="cursor-pointer mr-5 pb-1 border-base-100 focus:border-black">Dashboard</label>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 border">
                            <li><Link to="/myServices">Manage Services</Link></li>
                            <li><Link to="/addServices">Add Service</Link></li>
                            <li><Link to="/addSchedules">My Schedules</Link></li>
                        </ul>
                    </div>

                    <button onClick={handleSingOut} className="lg:mr-5 lg:my-0 my-3">Log Out </button>
                </>
            ) : (
                <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active mr-5 italic pb-1 border-b-[1px] border-black" : "mr-5 pb-5 lg:my-0 m-0 pt-6"} to="/login" >
                    Log in
                </NavLink>
            )}
        </>
    );



    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <div className="w-full navbar  container mx-auto">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2  ">
                        <div className="flex items-center gap-12">
                            <Link to='/'><img className="h-[90px]" src={logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="flex-none hidden lg:flex  items-center ">
                        {navLinks}
                        {
                            user && (<div className="dropdown dropdown-bottom dropdown-end">
                                <img tabIndex={0} className="w-10 h-10 rounded-full cursor-pointer" src={photo} alt="User dropdown" />

                                <div tabIndex={0} className="dropdown-content overflow-x-scroll z-[1] menu  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">

                                        <div>{name}</div>
                                        <div className="font-medium truncate">{email}</div>
                                    </div>
                                    <div className="py-1">
                                        <button onClick={handleSingOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                                    </div>
                                </div>
                            </div>)


                        }
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 min-h-full bg-base-200">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;