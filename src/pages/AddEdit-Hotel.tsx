import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AddEdit-Hotel.css";
import axios from "axios";
import { toast } from "react-toastify";

const AddEditHotel: React.FC = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !city || !country || !address) {
      toast.error("Please provide value in each input field");
    } else {
      axios
        .post("https://hotel-ranking-api.onrender.com/hotel", {
          name,
          city,
          country,
          address,
        })
        .then()
        .catch((err) => toast.error(err));
      toast.success("Hotel Ranked Successfully!!");
      setTimeout(() => navigate("/"), 1000);
    }
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Hotel Name..."
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Hotel City..."
          value={city || ""}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="Hotel Country..."
          value={country || ""}
          onChange={(e) => setCountry(e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Hotel Address..."
          value={address || ""}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input type="submit" value="Rank" />
      </form>
    </div>
  );
};

export default AddEditHotel;
