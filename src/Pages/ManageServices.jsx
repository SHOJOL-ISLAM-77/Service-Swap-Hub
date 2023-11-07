import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext)


    const url = `http://localhost:7000/api/v1/get-book-services?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setServices(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error while making GET request:', error);
            });
    }, [url]);


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:7000/api/v1/delete-service/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        const updatedServices = services.filter((item) => item._id !== id);
                        setServices(updatedServices);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                    });
            }
        });


    }

    return (
        <div className="border-t-2">
            <div className="container mx-auto">
                {loading ? (
                    <div className="flex justify-center items-center text-blue-600">
                        <svg className="animate-spin h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.373 0 0 6.373 0 14h2a10 10 0 1010-10V0H8a12 12 0 0112 12h-2a10 10 0 00-10 10c0 5.523 4.477 10 10 10h2a12 12 0 01-12-12z"></path>
                        </svg>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 mx-auto gap-16 my-14">
                        {
                            services.map(service => (

                                <div key={service._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <h3>
                                        <img className="rounded-t-lg h-[300px] w-full" src={service.serviceImage} alt="" />
                                    </h3>
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.serviceName}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.details.slice(0, 150)}...<span className="text-blue-700 font-bold">Read more</span></p>
                                        <div className="flex justify-between">
                                            <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Update
                                            </Link>
                                            <Link onClick={() => handleDelete(service._id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Delete
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageServices;