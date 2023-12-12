import { Helmet } from "react-helmet";
import AtYourFinger from "../Components/AtYourFinger";
import Banner from "../Components/Banner";
import EverydayLifeMade from "../Components/EverydayLifeMade";
import GetInspired from "../Components/GetInspired";
import OurPopularService from "../Components/OurPopularService";
import PublicReview from "../Components/PublicReview";

const Home = () => {
  return (
    <div className=" mx-5">
      <Banner />
      <OurPopularService />
      <EverydayLifeMade />
      <GetInspired />
      <AtYourFinger />
      <PublicReview />
      <Helmet title="Home-SERVICE-SWAP-HUB" />
    </div>
  );
};

export default Home;
