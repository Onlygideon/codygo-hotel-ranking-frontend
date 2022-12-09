import React, { useState } from "react";
import Axios from "axios";
import "../pages/View-Hotel.css"

const API_KEY =
  "pk.eyJ1Ijoib25seWdpZGVvbiIsImEiOiJjbGJnZGpmZnQwM3N3M3BubXk0ZnpnM2lvIn0.UfkG86oAnNDrExcjaNo_2w";

const HotelMap = ({ setLat, setLon }: any) => {
  const [city, setCity] = useState("lagos");

  function getCoordinates() {
    Axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${API_KEY}`
    )
      .then((res) => {
        setLon(res.data.features[0].geometry.coordinates[0]);
        setLat(res.data.features[0].geometry.coordinates[1]);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="map">
      <h2 className="location">Enter hotel location</h2>
      <div className="inp-box">
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button onClick={() => getCoordinates()} className="button">Show Location</button>
      </div>
    </div>
  );
};

export default HotelMap;
