import React from "react";
import CustomButton from "../../../customComponents/Button";
import { NavLink } from "react-router-dom";

import "./FourthBlock.scss";

const FourthBlock = () => {
  return (
    <div className="fourth-block">
      <div className="fourth-block-content">
        <p className="fourth-block-text">
          Щоб дізнатись вартість наших послуг, в залежності від Ваших скарг,
          пропонуємо скористатись калькулятором
        </p>
        <NavLink to="/service" style={{ textDecoration: "none"  }}>
          <CustomButton>Розрахувати вартість</CustomButton>
        </NavLink>
      </div>
    </div>
  );
};

export default FourthBlock;
