import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import AddEditHotel from "./pages/AddEdit-Hotel";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import ViewHotel from "./pages/View-Hotel";
import UpdateHotel from "./pages/updateHotel";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-hotel" element={<AddEditHotel />} />
          <Route path="/update/:id" element={<UpdateHotel />} />
          <Route path="/show-hotel" element={<ViewHotel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
