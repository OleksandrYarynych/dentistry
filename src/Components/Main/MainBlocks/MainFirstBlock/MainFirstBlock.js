import React from "react";
import CustomButton from "../../../customComponents/Button";
import { NavLink } from "react-router-dom";

import "./MainFirstBlock.scss";

const MainFirstBlock = () => {
  return (
    <div className="maiv-first-block">
      <div className="maiv-first-block-content">
        <h2 className="maiv-first-block-title">
          Раді вітати Вас в нашій студії стоматології
        </h2>
        <h4 className="maiv-first-block-sb-title">
          Хутчіш записуйся на прийом до наших лікарів! Для зворотнього зв’язку
          тисни кнопку нижче.
        </h4>
        <NavLink to="/contacts" style={{ textDecoration: "none" }}>
          <CustomButton>Зв'язатись</CustomButton>
        </NavLink>
      </div>
    </div>
  );
};

export default MainFirstBlock;
