import { Link } from "react-router-dom";

const AllTouristsSpot = () => {
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div>
        <img
          src="https://source.unsplash.com/random/100x100/?5"
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">Tourists Spot Name</h2>
        <p className="text-sm dark:text-gray-600">Average Cost</p>
        <p>Total Visitors</p>
        <p>Travel Time</p>
        <p>Seasonality</p>
      </div>
      <Link to={"/viewDetails"}>
        <input
          type="submit"
          value="View Details"
          className="btn btn-block bg-red-500"
        />
      </Link>
    </div>
  );
};

export default AllTouristsSpot;
