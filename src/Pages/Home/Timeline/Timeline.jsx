import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";

const Timeline = () => {

  useEffect(()=>{
    AOS.init();
  },[])


  return (
    <div className="h-[100vh] my-60 md:my-96 lg:my-10 w-9/12 mx-auto">
      <div className="text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center my-16">
        Evolution of Our System
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li data-aos="zoom-in"  data-aos-duration="1600">
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end text-xl md:text-2xl mb-10">
            <time className="font-mono italic">1980s</time>
            <div className="text-lg font-black">Conceptualization</div>
            The inception of the Inventory Management System idea initiated during the technological revolution of the 1980s, aiming to streamline businesses inventory control.
          </div>
          <hr />
        </li>
        <li data-aos="zoom-in"  data-aos-duration="1600">
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end text-xl md:text-2xl mb-10">
            <time className="font-mono italic">2000s</time>
            <div className="text-lg font-black">Development and Evolution</div>
            The system saw significant development in the 2000s, leveraging technological advancements to refine inventory tracking and management methodologies.
          </div>
          <hr />
        </li>
        <li data-aos="zoom-in"  data-aos-duration="1600">
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start text-xl md:text-2xl md:text-end mb-10">
            <time className="font-mono italic">Present</time>
            <div className="text-lg font-black">Enhancement and Adaptation</div>
            Continuous enhancement and adaptation of the Inventory Management System to modern technological landscapes, ensuring streamlined and efficient inventory control solutions.
          </div>
          <hr />
        </li>
      </ul>

    </div>
  );
};

export default Timeline;