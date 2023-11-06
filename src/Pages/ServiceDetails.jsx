import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    console.log(params);

    const url = `http://localhost:7000/api/v1/get-serviceDetails/${params.id}`
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setService(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error while making GET request:', error);
               
            });
    }, [url]);


    const [serviceDate, setServiceDate] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');

    const handleBooking = () => {
        // Your logic to add booking into the database goes here
        // This could involve an API call to your backend
        // Example: sendBookingToDatabase(service.id, serviceDate, specialInstructions);
        // Don't forget to validate and sanitize the inputs before sending to the database.
        // console.log('Booking added to the database:', {
        //     serviceId: service.id,
        //     serviceDate,
        //     specialInstructions
        // });
    };
    return (
        <div className="container mx-auto border-t-2 px-5">
            {
                loading ? (
                    <div className="flex justify-center items-center text-blue-600 h-screen">
                        <svg className="animate-spin h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.373 0 0 6.373 0 14h2a10 10 0 1010-10V0H8a12 12 0 0112 12h-2a10 10 0 00-10 10c0 5.523 4.477 10 10 10h2a12 12 0 01-12-12z"></path>
                        </svg>
                    </div>
                ) : (
                    <div className="my-8">
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <img src={service?.serviceImage} alt={service?.serviceName} className="w-full md:h-96 object-cover rounded-lg" />
                                <div className="flex items-center justify-between mt-4 px-4">
                                    <div className="flex items-center  flex-grow">
                                        <img src={user.photoURL} alt={service?.yourName} className="w-12 h-12 rounded-full" />
                                        <p className="ml-2">{service?.yourName}</p>
                                    </div>
                                    <div className="flex justify-between flex-grow items-center">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Book Now</button>
                                        <p className="font-bold mt-2">Price: {service?.price}</p>
                                    </div>
                                </div>
                                <div className="my-8 py-5 border-t-4">
                                    <h2 className="md:text-2xl font-bold text-lg mb-4">Service provider information:</h2>

                                    <img src={user.photoURL} alt={service?.name} className="w-32 h-32 object-cover rounded-lg mt-4" />
                                    <h2 className="lg:text-2xl font-bold mb-4 text-lg">Name: {service?.yourName}</h2>
                                    <p className="text-lg">Location: <span className="underline">{service?.serviceArea}</span></p>

                                </div>
                            </div>
                            <div>

                                <h3 className="text-2xl font-bold mt-4">{service?.serviceName}</h3>
                                <p className="mt-2 text-lg text-justify">{service?.description}</p>

                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default ServiceDetails;