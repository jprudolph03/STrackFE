import React from "react";
import DisplayLots from "./DisplayLots";

function ForgingList(props) {
  const forgingList = props.lots;
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Forging</h1>
      </div>
      {forgingList.map((fl) => (
        <DisplayLots lotNum={fl.num} />
      ))}
    </>
  );
}

export default ForgingList;
