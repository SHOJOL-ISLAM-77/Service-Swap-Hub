
import 'animate.css/animate.min.css';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const AddServices = () => {

    const { user } = useContext(AuthContext)

    const name = user?.displayName;
    const email = user?.email;

    const handleAddService = async (e) => {
        e.preventDefault();

        const form = e.target;
        const serviceImage = form.serviceImage.value;
        const serviceName = form.serviceName.value;
        const yourName = form.yourName.value;
        const yourEmail = form.yourEmail.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const formData = { form, serviceImage, serviceName, yourName, yourEmail, price, serviceArea, description };

        const axios = require('axios');
        try {
            const response = await axios.post("http://localhost:5001/users", formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }


    }


    return (
        <div className=" flex flex-wrap bg-no-repeat bg-cover bg-[url('https://img.freepik.com/premium-photo/abstract-background-images-wallpaper-ai-generated_643360-19229.jpg')]">

            <div className="w-full md:w-1/2 py-12 mx-auto animate__animated animate__fadeInLeft">
                <form onSubmit={handleAddService} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceImage">
                            Picture URL of the Service
                        </label>
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="serviceImage"
                            type="text"
                            placeholder="Enter Picture URL"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceName">
                            Service Name
                        </label>
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="serviceName"
                            type="text"
                            placeholder="Enter Service Name"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yourName">
                            Your Name
                        </label>
                        <input
                            required
                            className="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="yourName"
                            type="text"
                            defaultValue={name}
                            readOnly
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yourEmail">
                            Your Email
                        </label>
                        <input
                            required
                            className="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="yourEmail"
                            type="text"
                            defaultValue={email}
                            readOnly
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="price"
                            type="text"
                            placeholder="Enter Price"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceArea">
                            Service Area
                        </label>
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="serviceArea"
                            type="text"
                            placeholder="Enter Service Area"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="description"
                            placeholder="Enter Description"
                        ></textarea>
                    </div>


                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;