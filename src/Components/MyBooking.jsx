import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyBooking = () => {
    const [services, setServices] = useState([]);
    const { user } = useContext(AuthContext);


    const url = `http://localhost:7000/api/v1/get-my-booking-services?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setServices(response.data);
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
                fetch(`http://localhost:7000/api/v1/delete-booking-service/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.deletedCount) {
                            const updatedServices = services.filter((item) => item._id !== id);
                            setServices(updatedServices);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "Sorry!",
                                text: "Your file has not deleted.",
                                icon: "error"
                            });
                        }

                    });
            }
        });
    }

    return (
        <div className="container mx-auto border-t-4 py-10">

            <h2 className="text-3xl font-bold">My booking : {services.length}</h2>

            {services.length >= 1 ? (<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 my-11">
                {
                    services.map(service => (
                        <div key={service._id} className="w-full justify-between flex flex-col mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="p-8 rounded-t-lg h-[300px]" src={service.serviceImage} alt="product image" />
                            <div className="px-5 pb-5">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{service.serviceName}</h5>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${service.price}</span>
                                    <Link onClick={() => handleDelete(service._id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</Link>
                                </div>
                                <span className="text-md text-gray-900 dark:text-white"> Your booking: <span className="underline font-bold">{service.status}</span></span>

                            </div>
                        </div>

                    ))
                }
            </div>) : (<h4 className=" text-center text-2xl font-semibold"> You do not book any service. <Link className="underline" to="/services">Please book.</Link> </h4>)}
        </div>
    );
};

export default MyBooking;