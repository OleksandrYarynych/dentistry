import React from "react";

const Sum = (props) => {
  const { sum } = props;
  return (
    <div className="sum-block">
      <span className="sum-text">Сума {sum} грн</span>
    </div>
  );
};

export default Sum;
