import Banner from "../HomeComponents/Banner";

import Gallery from "../HomeComponents/Gallery";
import Section1 from "../HomeComponents/Section1";
import Section2 from "../HomeComponents/Section2";
import CarTabs from "../HomeComponents/carTabs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CarTabs></CarTabs>
            <Section1></Section1>
            <Section2></Section2>
        </div>
    );
};

export default Home;