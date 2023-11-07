import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
    const [show, setShow] = useState(false)
    const [loginError, setLoginError] = useState('');
    const { login, googlePopUp, githubPopUp } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        setLoginError('');

        login(email, password)
            .then((result) => {
                console.log(result);
                Swal.fire(
                    'Good job!',
                    'Login!',
                    'success'
                )
                navigate(location?.state ? location.state : "/")
                return;
            })
            .catch(
                setLoginError('Do not match email or password')
            )

    }

    const handleGoogleSingUp = () => {
        googlePopUp()
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : "/")
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  })
            })
            .catch(error => {
                setLoginError(error.message)
            })
    }
    const handleGithubSingUp = () => {
        githubPopUp()
            .then(
                navigate(location?.state ? location.state : "/"),
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                }),
        )
            .catch(error => {
                setLoginError(error.message)
            })
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/man-doing-professional-home-cleaning-service_23-2150358952.jpg?size=626&ext=jpg&ga=GA1.1.489338979.1694797420&semt=ais')]">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
                        <p className="text-gray-500">Login to your account</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6 relative">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                            <input
                                type={show ? "text" : "password"}
                                name="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your password"
                            />
                            <span onClick={() => setShow(!show)} className="absolute right-5 top-[40px] cursor-pointer">{show ? <FaEyeSlash /> : <FaEye />}</span>
                        </div>
                        {
                            loginError && <p className="text-red-700 pt-4">{loginError}</p>
                        }
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-all duration-300 ease-in-out transform hover:scale-105"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <Link className="text-blue-500 hover:underline" to='/singUp'>Have a account? Sing Up</Link>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-gray-500">or</p>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleGoogleSingUp}
                            className="bg-red-600 text-white py-2 px-4 rounded-md mr-2 hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Sign in with Google
                        </button>
                        <button
                            onClick={handleGithubSingUp}
                            className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Sign in with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
