import { useEffect, useState } from "react";
import useAuthHooks from "../Hooks/UseAuthHooks";
import { Link, useLoaderData } from "react-router-dom";

const MyCart = () => {
  // const loadedUsers = useLoaderData();
  // const [users, setUsers] = useState(loadedUsers);
  const { user } = useAuthHooks() || {};
  const [item, setItem, index] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myCart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);


  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("delete success");

        // // remove
        // const remainingData = users.filter((item) => item._id !== id);
        // setUsers(remainingData);
      });
  };

  return (
    <div>
      <h2>spots: {item.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
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
                <td>{spot.country_Name}</td>
                <td>{spot.tourists_spot_name}</td>
                <td>{spot.spot_Location}</td>
                <td>
                  <Link to={`/update/${spot._id}`}>
                    <button>Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(spot._id)}>Delete</button>
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
