import React from "react";
import Calculator from "../Calculator/Calculator";

import "./Service.scss";

const Service = () => {
  return (
    <div>
      <div className="service-text-wrapper">
        <div className="service-title">
          <h1>Послуги</h1>
        </div>

        <p>
          Тут ви можете підрахувати вартість Вашого лікування у нашій клініці{" "}
        </p>
      </div>
      <Calculator />
    </div>
  );
};

export default Service;
