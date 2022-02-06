import React from "react";

function DisplayLots(props) {
  return (
    <div style={{ margin: "10px auto" }} className="card w-50 text-center">
      <div key={props._id} className="card-body">
        <h5 className="card-title">{props.lotNum}</h5>
        <p className="card-text">Some content here?</p>
        <a className="btn btn-outline-success">Report Forging Scrap</a>
      </div>
    </div>
  );
}

export default DisplayLots;
