import React from "react";

const Rank = ({ name, count }) => {
  return (
    <div>
      <div className="white f3">
        {`${name}, Total Human Face(s) Detected  :${count}`}
      </div>
    </div>
  );
};

export default Rank;
