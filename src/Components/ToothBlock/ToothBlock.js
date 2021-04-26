import React from "react";

import "./ToothBlock.scss";

const ToothBlock = ({ tooth }) => {
  return <div className={tooth.classes}>{tooth.number}</div>;
};

export default ToothBlock;
