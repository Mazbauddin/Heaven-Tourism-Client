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
  useEffect(() => {
    fetch(`http://localhost:5000/singleSpot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data);
        console.log(data.average_cost);
      });
  }, [id]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Hello</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default View_Details;
