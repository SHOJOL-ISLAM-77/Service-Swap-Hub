import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet";
import axios from "axios";


const UpdateService = () => {
    const params = useParams();
    const service = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleDataUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const serviceImage = form.serviceImage.value;
        const serviceName = form.serviceName.value;
        const photo = user.photoURL;
        const yourName = form.yourName.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const formData = { serviceImage, serviceName, yourName, price, serviceArea, description, photo };

        
        axios.put(`https://service-swap-hub-server.vercel.app/api/v1/update-my-services/${params.id}`, formData)
            .then((res) => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Service updated!",
                        icon: "success"
                    });
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="border-t-4 bg-no-repeat bg-cover bg-[url('https://miro.medium.com/v2/resize:fit:1200/1*xMuIOwjliGUPjkzukeWKfw.jpeg')]">
            <div className="w-full max-w-3xl mx-auto py-12">
                <form onSubmit={handleDataUpdate} className=" backdrop-blur-sm bg-white/30 shadow-md rounded pt-6 pb-8 mb-4 px-3">

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Picture URL of the Service
                        </label>
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="serviceImage"
                            type="text"
                            placeholder="Enter Picture URL"
                            defaultValue={service.data.serviceImage}
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Service Name
                        </label>
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="serviceName"
                            type="text"
                            placeholder="Enter Service Name"
                            defaultValue={service.data.serviceName}
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Your Name
                        </label>
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="yourName"
                            type="text"
                            defaultValue={service.data.yourName}
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Your Email
                        </label>
                        <input
                            required
                            className="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="yourEmail"
                            type="text"
                            defaultValue={service.data.yourEmail}
                            readOnly
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Price
                        </label>
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="price"
                            type="text"
                            placeholder="Enter Price"
                            defaultValue={service.data.price}
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Service Area
                        </label>
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="serviceArea"
                            type="text"
                            placeholder="Enter Service Area"
                            defaultValue={service.data.serviceArea}
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Description
                        </label>
                        <textarea
                            rows='4'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="description"
                            placeholder="Enter Description"
                            defaultValue={service.data.description}
                        ></textarea>
                    </div>


                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
            <Helmet title="Update Service - SERVICE-SWAP-HUB" />
        </div>
    );
};

export default UpdateService;