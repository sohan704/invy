import Banner from "../Banner/Banner";
import Download from "../Download/Download";
import Functions from "../Functions/Functions";
import Navbar from "../Navbar/Navbar";
import Socials from "../Socials/Socials";
import Timeline from "../Timeline/Timeline";

const Home = () => {
  return (
    <div> 
      <Navbar></Navbar>
      <Banner></Banner>
      <Functions></Functions>
      <Timeline></Timeline>
      <Socials></Socials>
      <Download></Download>
    
    </div>
  );
};

export default Home;