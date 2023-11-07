import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const MyPendingWork = () => {
    const [services, setServices] = useState([]);
    const { user } = useContext(AuthContext);


    const url = `http://localhost:7000/api/v1/get-my-pending-services?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('Error while making GET request:', error);
            });
    }, [url]);


    const handleUpdateStatus = (event, id) => {
        const selectValue = event.target.value;
        console.log(selectValue, id);

        const data = { selectValue }

        fetch(`http://localhost:7000/api/v1/update-pending-work/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Status updated!",
                        icon: "success"
                    });
                }
            });
    }
    return (
        <div className="mx-auto container">
            <h3 className="text-3xl font-bold"> My pending work: {services.length}</h3>
            {/* <div className="py-28">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    client
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    service taking date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map(service => (
                                <tr key={service._id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="w-32 p-4">
                                        <img src={service.serviceImage} alt="Apple Watch" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">
                                        {service.serviceName}
                                    </td>
                                    <td scope="row" className="px-6 py-4 flex items-center text-gray-900 whitespace-nowrap">
                                        <img className="w-10 h-10 rounded-full" src={service.userPhoto} alt="User image" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">{service.userName}</div>
                                            <div className="font-normal text-gray-500">{service.userEmail}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">
                                        {service.serviceTakingDate}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">
                                        ${service.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <select onChange={(e) => handleUpdateStatus(e, service._id)} id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                                            <option value="Pending">Pending</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> */}











            <div className="py-28 overflow-x-auto">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr className="">
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    client
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    service taking date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map(service => (
                                <tr key={service._id} className="bg-white border-b hover:bg-gray-50 ">
                                    <td className="w-32 p-4">
                                        <img src={service.serviceImage} alt="Apple Watch" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">
                                        {service.serviceName}
                                    </td>
                                    <td scope="row" className="px-6 py-4 flex items-center text-gray-900 whitespace-nowrap">
                                        <img className="w-10  h-10 rounded-full" src={service.userPhoto} alt="User image" />
                                        <div className="pl-3 lg:inline hidden">
                                            <div className="text-base font-semibold">{service.userName}</div>
                                            <div className="font-normal  text-gray-500">{service.userEmail}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">
                                        {service.serviceTakingDate}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">
                                        ${service.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <select onChange={(e) => handleUpdateStatus(e, service._id)} id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                                            <option value="Pending">Pending</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>







        </div>
    );
};

export default MyPendingWork;