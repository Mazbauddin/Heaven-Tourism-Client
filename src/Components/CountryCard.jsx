// import { useNavigate } from "react-router-dom";

const CountryCard = (item) => {
  //   const navigate = useNavigate();
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

  return (
    <div className=" w-full group  cursor-pointer ">
      <div className="cardShadow p-5 w-full bg-white dark:bg-[#1a2641d5] rounded">
        <img
          className="w-full h-[150px] object-contain rounded-md"
          src={image_Url}
          alt=""
        />
        <div className=" w-full group-hover:bg-[#ab3154] rounded h-10 mt-2 bg-[#FF497C] flex justify-center items-center">
          <p className="text-center font-bold text-red-500">
            {" "}
            Hello{country_Name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
