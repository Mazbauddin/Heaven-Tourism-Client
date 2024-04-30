import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View_Details = ({ item }) => {
  const { id } = useParams();
  console.log(id);

  const [spot, setSpot] = useState({});
  const {
    _id,
    country_Name,
    tourists_spot_name,
    spot_Location,
    short_Description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
    user_Email,
    user_Name,
    image_Url,
  } = item || {};
  console.log(spot.travel_time);
  useEffect(() => {
    fetch(`https://tourism-management-server-rho.vercel.app/singleSpot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data);
        console.log(data.average_cost);
      });
  }, [id]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img className="h-full w-full" src={spot.image_Url} />
        <div>
          <h1 className="text-5xl font-bold">{spot.country_Name}</h1>
          <p className="py-4 text-2xl">{spot.spot_Location}</p>
          <p className="py-4 text-4xl">{spot.tourists_spot_name}</p>
          <div className="py-4 flex flex-col lg:flex-row justify-between">
            <p className="py-4 text-lg">Total Time: {spot.travel_time} Hours</p>
            <p className="py-4 text-lg">Season : {spot.seasonality}</p>
          </div>
          <div className="py-4">
            <p className="py-4 text-lg ">
              Per Person Cost : $ {spot.average_cost} USD
            </p>
            <p className="py-4 text-lg ">
              Total Per Year Visitors : {spot.totalVisitorsPerYear} People
            </p>
          </div>
          <p className="py-4  text-lg ">{spot.short_Description}</p>

          <div className="w-full flex justify-between items-center">
            <button className="btn w-full btn-primary mt-10">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_Details;
