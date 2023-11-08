import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {


    return (
        <div className=" bg-no-repeat bg-cover bg-[url('https://i.ibb.co/1XRbCyB/Banner-image.png')]">
            <div className="py-24">

               <div className="max-w-xl p-6 mx-auto bg-base-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
                    <h1 className="text-4xl text-center my-5 font-bold tracking-tight">
                        Get help.{' '}
                        <span style={{ color: 'red', fontWeight: 'bold' }}>

                            <Typewriter
                                words={["Gain happiness.", "Stay healthy."]}
                                loop={100}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    <p className="border-2 border-blue-600"></p>
                    <p className="my-4 text-center font-medium">Just Task.</p>
                    <p className="my-4 text-center font-medium">We want task from you...</p>
                    <div className="flex items-center gap-2 md:flex-row flex-col justify-around">
                        <Link to="/services" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            See our services
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;

