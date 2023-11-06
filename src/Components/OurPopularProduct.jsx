import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const OurPopularProduct = () => {
    const [services, setServices] = useState([])
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const url = 'http://localhost:7000/api/v1/get-services-for-home';
    // { serviceImage, serviceName, yourName, yourEmail, price, serviceArea, description } 


    useEffect(() => {
        axios.get(url)
            .then(response => {
                setServices(response.data)
                setLoading(false);
            })
            .catch(error => {
                console.error('Error while making GET request:', error);
                setLoading(false);
            });
    }, [])
    return (
        <div className="container mx-auto my-[100px]">
            <h2 className="text-4xl font-bold">Popular services {services.length}</h2>


            {
                loading ? (
                    <div className="flex justify-center items-center text-blue-600">
                        <svg className="animate-spin h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.373 0 0 6.373 0 14h2a10 10 0 1010-10V0H8a12 12 0 0112 12h-2a10 10 0 00-10 10c0 5.523 4.477 10 10 10h2a12 12 0 01-12-12z"></path>
                        </svg>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-16 my-14">
                        {
                            services?.slice(0, 6).map(service => <div key={service._id} className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg w-[670px] h-[450px]" src={service.serviceImage} alt="" />

                                <div className="p-5">
                                    <div className="flex items-center space-x-4 pb-2">
                                        <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                                        <div className="font-medium dark:text-white">
                                            <div>{user?.displayName}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</div>
                                        </div>
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.serviceName}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.description.slice(1, 100)}....<span className="text-blue-600 cursor-pointer">Read more</span></p>
                                    <div className="flex justify-between items-center">
                                        <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            View Detail
                                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </Link>

                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white"> $ {service.price}</h3>
                                    </div>
                                </div>
                            </div>

                            )
                        }
                    </div>
                )
            }


            <div className={`justify-center items-center my-8 ${loading ? "hidden" : "flex"}`}>
                <Link to="/services" className="btn  btn-outline w-[200px]">Show All</Link>
            </div>
        </div>
    );
};

export default OurPopularProduct;