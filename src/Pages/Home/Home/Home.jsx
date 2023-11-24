import Banner from "../Banner/Banner";
import Download from "../Download/Download";
import Email from "../Email/Email";
import Footer from "../Footer/Footer";
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
      <Email></Email>
      <div className="divider divider-neutral w-11/12 mx-auto"> Invy</div>
      <Footer></Footer>
    
    </div>
  );
};

export default Home;