import AtYourFinger from "../Components/AtYourFinger";
import Banner from "../Components/Banner";
import EverydayLifeMade from "../Components/EverydayLifeMade";
import GetInspired from "../Components/GetInspired";
import MapComponent from "../Components/Location";
import OurPopularService from "../Components/OurPopularService";
import PublicReview from "../Components/PublicReview";


const Home = () => {
    return (
        <div>
           <Banner/>
           <OurPopularService/>
           <EverydayLifeMade/>
           <GetInspired/>
           <AtYourFinger/>
           <PublicReview/>
           <h1 className="text-center text-4xl font-bold my-3">Our head office !</h1>
           <MapComponent/>
        </div>
    );
};

export default Home;