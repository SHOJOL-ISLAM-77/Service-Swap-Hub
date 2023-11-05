import { FaSistrix } from "react-icons/fa";


const Banner = () => {

    return (
        <div className=" bg-no-repeat bg-cover bg-[url('https://i.ibb.co/1XRbCyB/Banner-image.png')]">
            <div className="py-24">

                <div className="max-w-xl p-6 mx-auto bg-base-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <h5 className="text-4xl text-center my-5 font-bold tracking-tight">Get help. Gain happiness.</h5>

                    <p className="border-2 border-blue-600"></p>
                    <p className="my-4 text-center font-medium">Just Task.</p>
                    <p className="my-4 text-center font-medium">We want task from you...</p>
                    <div className="flex items-center justify-around">
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Get help today
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>

                        <div>

                            <details className="dropdown">
                                <summary className=" border-2 border-blue-700 px-11 btn "><FaSistrix /> <p>I need help with</p></summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </details>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;