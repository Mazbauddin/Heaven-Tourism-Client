import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import Tourist_Card from "../Tourist_Card/Tourist_Card";
import Testimonial from "../Components/Testimonial";
import Team from "../Components/Team";

import Features from "../Components/Features";

const Home = () => {
  const tourist_spot = useLoaderData();

  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      {/* Tourist item start*/}
      <div className="mt-20 ">
        <h1
          className="text-center mb-10 text-3xl sm:text-6xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          Tourists Spots
        </h1>
        <h1>Tourist item {tourist_spot.length}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grow gap-10">
          {tourist_spot.map((tourist) => (
            <Tourist_Card key={tourist._id} tourist={tourist}></Tourist_Card>
          ))}
        </div>
      </div>

      <div className="mt-20 ">
        <h1
          className="text-center mb-10 text-3xl sm:text-6xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          Country Card
        </h1>
      </div>
      <div>
        <Features></Features>
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
      <div>
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
