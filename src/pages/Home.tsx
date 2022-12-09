import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";

const Home: React.FC = () => {
  const [datas, setData] = useState([]);

  setInterval(() => {
    axios
      .get("https://hotel-ranking-api.onrender.com/hotels")
      .then((getData) => {
        if (getData?.data !== null) {
          setData(getData?.data);
        } else {
          setData([]);
        }
      })
      .catch((err) => toast.error(err));
    window.location.reload();
  }, 600000);

  useEffect(() => {
    axios
      .get("https://hotel-ranking-api.onrender.com/hotels")
      .then((getData) => {
        if (getData?.data !== null) {
          setData(getData?.data);
        } else {
          setData([]);
        }
      })
      .catch((err) => toast.error(err));

    return () => {
      setData([]);
    };
  }, []);

  const setId = (id: any) => {
    localStorage.setItem("ID", id)
  }

  const onDelete = (id: any) => {
    if (window.confirm("Are you sure you want to derank this hotel")) {
      axios
        .delete(`https://hotel-ranking-api.onrender.com/hotel/${id}`)
        .then(() => {
          window.location.reload();
          toast.success("Hotel De-Ranked Successfully!!");
        })
        .catch((err) => toast.error(err));
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h2 className="hotel">
        Hotels <span style={{ color: "#4284f5" }}>Rank</span>
      </h2>
      <table className="data-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>City</th>
            <th style={{ textAlign: "center" }}>Country</th>
            <th style={{ textAlign: "center" }}>Address</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {datas.map((data: any, index, id: any) => {
            //console.log(data)
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>
                  {data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}
                </td>
                <td>
                  {data?.city.charAt(0).toUpperCase() + data?.city.slice(1)}
                </td>
                <td>
                  {data?.country.charAt(0).toUpperCase() +
                    data?.country.slice(1)}
                </td>
                <td>
                  {data?.address.charAt(0).toUpperCase() +
                    data?.address.slice(1)}
                </td>
                <td>
                  <Link to={`/update/${data?._id}`}>
                    <button className="btn btn-edit" onClick={() => setId(data?._id)}>Edit</button>
                  </Link>

                  <button
                    className="btn btn-delete"
                    onClick={() => onDelete(data?._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
