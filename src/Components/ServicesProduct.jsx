import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ServicesProduct = () => {
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [showAllServices, setShowAllServices] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const url = 'http://localhost:7000/api/v1/get-services';

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setServices(response.data);
                setFilteredServices(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error while making GET request:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const results = services.filter(service =>
            service.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredServices(results);
    }, [searchTerm, services]);

    return (
        <div>
            <div className=" bg-no-repeat bg-cover bg-[url('https://as2.ftcdn.net/v2/jpg/04/65/81/67/1000_F_465816712_bJPZ9ahoO71J0H2SLxBCWHN3LxyHMwIf.jpg')]">
                <div className="py-24">

                    <div className="max-w-xl p-6 mx-auto bg-base-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <h5 className="text-4xl text-center my-5 font-bold tracking-tight">Get help. Gain happiness.</h5>

                        <p className="border-2 border-blue-600"></p>
                        <p className="my-4 text-center font-medium">Just Task.</p>
                        <p className="my-4 text-center font-medium">We want task from you...</p>
                        <form>
                            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <h2 className="text-4xl font-bold text-center my-6">Our services</h2>



            {loading ? (
                <div className="flex justify-center items-center text-blue-600">
                    <svg className="animate-spin h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.373 0 0 6.373 0 14h2a10 10 0 1010-10V0H8a12 12 0 0112 12h-2a10 10 0 00-10 10c0 5.523 4.477 10 10 10h2a12 12 0 01-12-12z"></path>
                    </svg>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-16 my-14">
                    {filteredServices.slice(0, showAllServices ? services.length : 6).map(service => (<div key={service._id} className="flex max-w-5xl items-end mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-l-lg min-w-[670px] max-h-[450px]  min-h-[450px]" src={service.serviceImage} alt="" />

                        <div className="p-5 flex flex-col space-y-32">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.serviceName}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.description.slice(1, 100)}....<span className="text-blue-600 cursor-pointer">Read more</span></p>
                                <div className="flex justify-between items-center">
                                    <Link to={`/servicesDetail/${service._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        View Detail
                                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </Link>

                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white"> $ {service.price}</h3>
                                </div>
                            </div>
                            <div className="flex items-left space-x-3 pb-2">
                                <img className="w-10 h-10 rounded-full" src={service.photo} alt="" />
                                <div className="font-medium dark:text-white">
                                    <div>{service.yourName}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{service.yourEmail}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                    }

                </div>
            )}


            <div className={`justify-center items-center my-8 ${loading ? "hidden" : "flex"}`}>
                <Link to="/services" className={`btn  btn-outline w-[200px] ${showAllServices && 'hidden'}`} onClick={() => setShowAllServices(true)}>Show All</Link>
            </div>
        </div>
    );
};

export default ServicesProduct;