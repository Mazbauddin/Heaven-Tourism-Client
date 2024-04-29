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
      <div>
        <h1 className="text-6xl text-center">Tourists Spots</h1>
        <h1>Tourist item {tourist_spot.length}</h1>

        {tourist_spot.map((tourist) => (
          <Tourist_Card key={tourist._id} tourist={tourist}></Tourist_Card>
        ))}
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
