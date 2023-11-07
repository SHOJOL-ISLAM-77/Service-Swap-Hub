import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();

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

    const details = service.description;

    const handleBooking = async (e) => {
        e.preventDefault()
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const serviceProviderEmail = form.serviceProviderEmail.value;
        const userEmail = form.userEmail.value;
        const serviceTakingDate = form.serviceTakingDate.value;
        const specialInstruction = form.specialInstruction.value;
        const price = form.price.value;


        console.log({serviceName, serviceImage, specialInstruction, serviceProviderEmail, userEmail, price, serviceTakingDate});

        const data = {serviceName, serviceImage, specialInstruction, serviceProviderEmail, userEmail, price, serviceTakingDate, details};

        try {
            const response = await axios.post(`http://localhost:7000/api/v1/book-services`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data.acknowledged);
            if (response.data.acknowledged) {
                alert('hi')
            }
            form.reset()
        } catch (error) {
            console.log(error);
        }
    }



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
                                        <img src={service?.photo} alt={service?.yourName} className="w-12 h-12 rounded-full" />
                                        <p className="ml-2">{service?.yourName}</p>
                                    </div>
                                    <div className="flex justify-between flex-grow items-center">
                                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Book Now</button>
                                        <p className="font-bold mt-2">Price: ${service?.price}</p>
                                    </div>
                                </div>
                                <div className="my-8 py-5 border-t-4">
                                    <h2 className="md:text-2xl font-bold text-lg mb-4">Service provider information:</h2>

                                    <img src={service?.photo} alt={service?.name} className="w-32 h-32 object-cover rounded-lg mt-4" />
                                    <h2 className="lg:text-2xl font-bold mb-4 text-lg">Name: {service?.yourName}</h2>
                                    <p className="text-lg">Location: <span className="underline">{service?.serviceArea}</span></p>

                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mt-4">{service?.serviceName}</h3>
                                <p className="mt-2 text-lg text-justify">{service?.description}</p>

                            </div>
                        </div>

                        <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">X</button>
                                    </form>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-3xl font-bold mb-4">Purchase Service</h2>
                                    <form onSubmit={handleBooking} className="w-full max-w-md">
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3 mb-6">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                    Service Name
                                                </label>
                                                <input
                                                    name="serviceName"
                                                    required
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3"
                                                    type="text"
                                                    value={service.serviceName}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="w-full px-3 mb-6">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                    Service Image
                                                </label>
                                                <input
                                                    name="serviceImage"
                                                    required
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3"
                                                    type="text"
                                                    value={service.serviceImage}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="w-full px-3 mb-6">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                    Service Provider Email
                                                </label>
                                                <input
                                                    name="serviceProviderEmail"
                                                    required
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3"
                                                    type="text"
                                                    value={service.yourEmail}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="w-full px-3 mb-6">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                    User Email
                                                </label>
                                                <input
                                                    name="userEmail"
                                                    required
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3"
                                                    type="text"
                                                    value={user.email}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="w-full px-3 mb-6">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                    Service Taking Date
                                                </label>
                                                <input
                                                    name="serviceTakingDate"
                                                    required
                                                    className="appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3"
                                                    type="date"
                                                />
                                            </div>
                                            <div className="w-full px-3 mb-6">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                    Special Instructions
                                                </label>
                                                <textarea
                                                    name="specialInstruction"
                                                    required
                                                    className="appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3"
                                                    rows="2"
                                                    placeholder="Add special instructions..."
                                                ></textarea>
                                            </div>
                                            <div className="w-full px-3 mb-6">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                    Price
                                                </label>
                                                <input
                                                    name="price"
                                                    required
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3"
                                                    type="text"
                                                    value={service.price}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">

                                            <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit" >Purchase this Service</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>


                    </div>
                )
            }

        </div>
    );
};

export default ServiceDetails;