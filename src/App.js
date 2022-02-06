import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarNav from "./Components/SidebarNav";
import Header from "./Components/Header";
import Dashboard from "./Components/DashBoard";
import AddNewLot from "./Components/AddNewLot";
import ForgingList from "./Components/ForgingList";

import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <BrowserRouter>
          <SidebarNav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addNewLot" element={<AddNewLot />} />
            <Route path="/forgingList" element={<ForgingList />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
