import Swal from "sweetalert2";
import useAuthHooks from "../Hooks/UseAuthHooks";
const AddTouristSpot = () => {
  const { user } = useAuthHooks() || {};
  const handleAddTouristSpot = (event) => {
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
    const user_Email = form.user_Email.value;
    const user_Name = form.user_Name.value;
    const image_Url = form.image_Url.value;
    const email = user.email;

    const newTouristSpot = {
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
      email,
    };
    console.log(newTouristSpot);

    // send data to the server
    fetch("http://localhost:5000/tourist_spot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="p-24">
      <h2 className="text-3xl font-extrabold text-center">Add Tourists Spot</h2>
      <form onSubmit={handleAddTouristSpot}>
        {/* Country Name */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <select
              name="country_Name"
              className="select select-bordered w-full"
            >
              <option>Pick Your Southern favorite Country</option>
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
                placeholder="Tourists Spot Name"
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
                placeholder="Total Visitors Per Year"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* User Email and User Name */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="user_Email"
                defaultValue={user.email}
                placeholder="User Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="user_Name"
                defaultValue={user.displayName}
                placeholder="User Name"
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
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Tourists Spot"
          className=" px-4 w-full py-2 mt-4 rounded hover:bg-[#ec936fa6]  bg-[#5991e6] duration-200 text-white cursor-pointer font-semibold"
        />
      </form>
    </div>
  );
};

export default AddTouristSpot;
