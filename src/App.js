import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarNav from "./Components/SidebarNav";
import Header from "./Components/Header";
import Dashboard from "./Components/DashBoard";
import AddNewLot from "./Components/AddNewLot";
import ForgingList from "./Components/ForgingList";
import axios from "axios";

import "./App.css";

function App() {
  const [lots, setLots] = useState([]);

  useEffect(() => {
    axios
      .get("https://scrap-tracker.herokuapp.com/api/lot")
      .then(function (res) {
        setLots(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <SidebarNav />
          <Routes>
            <Route path="/" element={<Dashboard lots={lots} />} />
            <Route path="/addNewLot" element={<AddNewLot />} />
            <Route path="/forgingList" element={<ForgingList lots={lots} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
