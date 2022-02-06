import React from "react";
import axios from "axios";
import "./AddNewLot.css";

function AddNewLot() {
  const handleNewLot = (e) => {
    e.preventDefault();
    const newLot = e.target[0].value;
    console.log(newLot);
    axios
      .post("https://scrap-tracker.herokuapp.com/api/lot", {
        num: e.target[0].value,
        totalCoilWeight: e.target[1].value,
        STDLoss: e.target[2].value,
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Add New Lot</h1>
      </div>
      <form onSubmit={handleNewLot}>
        <div className="mb-3">
          <label className="form-label">New Lot Number</label>
          <input
            type="number"
            className="form-control"
            id="newLotNumber"
            placeholder="Enter New Lot Number"
          />
          <label className="form-label">Total Coil Weight</label>
          <input
            type="number"
            className="form-control"
            id="newLotNumber"
            placeholder="Total Coil Weight"
          />
          <label className="form-label">STD Coil Loss</label>
          <input
            type="number"
            className="form-control"
            id="newLotNumber"
            placeholder="STD Coil Loss"
          />
          <input
            style={{ marginTop: "10px" }}
            type="submit"
            className="btn btn-outline-primary"
          />
        </div>
      </form>
    </>
  );
}

export default AddNewLot;
