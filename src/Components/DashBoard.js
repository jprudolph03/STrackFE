import React from "react";
import DashboardList from "./DashboardList";

function DashBoard(props) {
  let lotArr = props.lots;

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Forging</th>
              <th scope="col">Pressing</th>
              <th scope="col">Tapping</th>
              <th scope="col">Wash</th>
              <th scope="col">VS</th>
            </tr>
          </thead>
          <tbody>
            {lotArr.map((l) => (
              <DashboardList key={l._id} lotNum={l.num} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashBoard;
