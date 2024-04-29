import { useNavigate } from "react-router-dom";

const Tourist_Card = ({ tourist_spot }) => {
  const navigate = useNavigate();
  const {
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
  } = tourist_spot || {};

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{country_Name}</h2>
        <p>{short_Description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Tourist_Card;
