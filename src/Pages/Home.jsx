import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import Tourist_Card from "../Tourist_Card/Tourist_Card";
import Testimonial from "../Components/Testimonial";
import Team from "../Components/Team";
import { useEffect, useState } from "react";
import Features from "../Components/Features";
import useAuthHooks from "../Hooks/UseAuthHooks";
import CountryCard from "../Components/CountryCard";

const Home = () => {
  const [countryTouristSpot, setCountryTouristSpot] = useState([]);
  const [countryTouristSpotLoading, setCountryTouristSpotLoading] =
    useState(false);
  const { user } = useAuthHooks() || {};
  const touristSpot = useLoaderData();
  const [allTouristSpot, setAllTouristSpot] = useState([]);

  useEffect(() => {
    // countryTouristSpot
    setCountryTouristSpotLoading(true);
    fetch("https://tourism-management-server-rho.vercel.app/touristSpot")
      .then((res) => res.json())
      .then((data) => {
        setCountryTouristSpotLoading(false);
        setCountryTouristSpot(data);
      });

    // all products
    fetch("https://tourism-management-server-rho.vercel.app/touristSpot")
      .then((res) => res.json())
      .then((data) => setAllTouristSpot(data));
  }, []);

  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      {/* Tourist item start*/}
      <div className="mt-20">
        <h1
          className="text-center mb-20 text-3xl sm:text-8xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          Tourists Spots
        </h1>
        <div className="container mx-auto ">
          <div className=" grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
            {allTouristSpot?.length > 9
              ? allTouristSpot
                  ?.slice(0, 9)
                  .map((item) => <Tourist_Card key={item._id} item={item} />)
              : allTouristSpot?.map((item) => (
                  <Tourist_Card key={item._id} item={item} />
                ))}

            {/* {allTouristSpot?.length > 9 && (
              <div className="mt-10 flex justify-center">
                <button className="text-white bg-[#FF497C] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">
                  See All
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* Country Card */}
      <div className="mt-20 ">
        <h1
          className="text-center mb-20 text-3xl sm:text-8xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          Country Card
        </h1>
        <h1>Country: {countryTouristSpot.length}</h1>

        {/* <div className=" grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  xl:grid-cols-3 gap-5  mt-10 w-full ">
          {countryTouristSpot?.length > 6
            ? countryTouristSpot
                ?.slice(0, 6)
                .map((item) => <CountryCard key={item._id} item={item} />)
            : countryTouristSpot?.map((item) => (
                <CountryCard key={item._id} item={item} />
              ))}
        </div> */}
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
