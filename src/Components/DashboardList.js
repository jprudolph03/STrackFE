import React from "react";

function DashboardList() {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Forgin</th>
              <th scope="col">Pressing</th>
              <th scope="col">Tapping</th>
              <th scope="col">Wash</th>
              <th scope="col">VS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
              <td>text2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashboardList;
