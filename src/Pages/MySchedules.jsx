import { Helmet } from "react-helmet";
import MyBooking from "../Components/MyBooking";
import MyPendingWork from "../Components/MyPendingWork";


const MySchedules = () => {
    return (
        <div>
            <MyBooking/>
            <MyPendingWork/>
            <Helmet title="My Schedules-SERVICE-SWAP-HUB"/>
        </div>
    );
};

export default MySchedules;