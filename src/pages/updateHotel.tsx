import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AddEdit-Hotel.css";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateHotel: React.FC = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .put(`https://hotel-ranking-api.onrender.com/hotel/${id}`, {
        name,
        city,
        country,
        address,
      })
      .then()
      .catch((err) => toast.error(err));
    toast.success("Hotel Rank Edited Successfully!!");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Hotel Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Hotel City..."
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          required
          placeholder="Hotel Country..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          placeholder="Hotel Address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input type="submit" value="Rank" />
      </form>
    </div>
  );
};

export default UpdateHotel;
