import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  console.log(id);

  const [spot, setSpot] = useState({});

  useEffect(() => {
    fetch(`https://tourism-management-server-rho.vercel.app/singleSpot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data);
        console.log(data);
      });
  }, [id]);

  const handleUpdate = () => {
    event.preventDefault();

    const form = event.target;

    const country_Name = form.country_Name.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const spot_Location = form.spot_Location.value;
    const short_Description = form.short_Description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

    const image_Url = form.image_Url.value;

    const updateSpot = {
      country_Name,
      tourists_spot_name,
      spot_Location,
      short_Description,
      average_cost,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      image_Url,
    };

    // send data to the server
    fetch(`https://tourism-management-server-rho.vercel.app/updateSpot/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="p-24">
      <h1 className="text-center font-bold text-5xl mb-10">
        Update Your Tourist Spot
      </h1>
      <form onSubmit={handleUpdate}>
        {/* Country Name */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <select
              name="country_Name"
              id="country_Name"
              defaultValue={spot.country_Name}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Pick Your Southern favorite Country
              </option>
              <option>Bangladesh</option>
              <option>Thailand</option>
              <option>Indonesia</option>
              <option>Malaysia</option>
              <option>Vietnam</option>
              <option>Cambodia</option>
            </select>
          </div>
          {/* Tourists Spot Name */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Tourists Spot Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="tourists_spot_name"
                defaultValue={spot.tourists_spot_name}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Location and   Short Description*/}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="spot_Location"
                defaultValue={spot.spot_Location}
                placeholder="location"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="short_Description"
                defaultValue={spot.short_Description}
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Average Cost and Seasonality */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="average_cost"
                defaultValue={spot.average_cost}
                placeholder="Average Cost"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="seasonality"
                defaultValue={spot.seasonality}
                placeholder="Seasonality"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Travel Time and Total Visitors Per Year */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="travel_time"
                defaultValue={spot.travel_time}
                placeholder="Travel Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Total Visitors Per Year</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="totalVisitorsPerYear"
                defaultValue={spot.totalVisitorsPerYear}
                placeholder="Total Visitors Per Year"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form Photo URL row */}
        <div className="mb-8">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image_Url"
                defaultValue={spot.image_Url}
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update"
          className=" px-4 w-full py-2 mt-4 rounded bg-[#ff691a]  hover:bg-[#5991e6] duration-200 text-white cursor-pointer font-semibold"
        />
      </form>
    </div>
  );
};

export default Update;
