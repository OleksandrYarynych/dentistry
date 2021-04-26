import React from "react";
import TeethPhotoBlock from "./TeethPhotoBlock/TeethPhotoBlock";
import DiseasesList from "./diseasesList/diseasesList";

import "./Calculator.scss";

const Calculator = () => {
  return (
    <div className="calculetor-block">
      <TeethPhotoBlock />
      <DiseasesList />
    </div>
  );
};

export default Calculator;
