import Banner from "./components/Banner";
import Education from "./components/Education";
import Services from "./components/Services";
import Skill from "./components/Skill";
import Statistics from "./components/Statistics";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Statistics></Statistics>
            <Services></Services>
            <Education></Education>
            <Skill></Skill>
            
        </div>
    );
};

export default Home;