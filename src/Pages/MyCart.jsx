import { useEffect, useState } from "react";
import useAuthHooks from "../Hooks/UseAuthHooks";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { user } = useAuthHooks() || {};
  const [item, setItem, index] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myCart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user, control]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setControl(!control);
        }

        // // remove
        // const remainingData = users.filter((item) => item._id !== id);
        // setUsers(remainingData);
      });
  };

  return (
    <div className="p-24">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Spot Image</th>
              <th>Country Name</th>
              <th>Tourist Spot</th>
              <th>Spot Location</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {item?.map((spot) => (
              <tr key={spot._id}>
                <th>1</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={spot.image_Url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{spot.country_Name}</td>
                <td>{spot.tourists_spot_name}</td>
                <td>{spot.spot_Location}</td>
                <td>
                  <Link to={`/update/${spot._id}`}>
                    <button className="btn_wave btn1 rounded-md">Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn_wave btn1 rounded-md"
                    onClick={() => handleDelete(spot._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
