import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "./Providers/AuthProvider";



const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    const location = useLocation()

    if (!loader) {
        return <div className="flex justify-center items-center h-screen">
            <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}