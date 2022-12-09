import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add-hotel") {
      setActiveTab("AddHotel");
    } else if (location.pathname === "/show-hotel") {
      setActiveTab("ShowHotel");
    }
  }, [location]);

  return (
    <div className="header">
      <p className="logo">Hotel Ranking</p>
      <div className="header-right">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>

        <Link to="/add-hotel">
          <p
            className={`${activeTab === "AddHotel" ? "active" : ""}`}
            onClick={() => setActiveTab("AddHotel")}
          >
            Add Hotel
          </p>
        </Link>

        <Link to="/show-hotel">
          <p
            className={`${activeTab === "ShowHotel" ? "active" : ""}`}
            onClick={() => setActiveTab("ShowHotel")}
          >
            Show Hotel
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
