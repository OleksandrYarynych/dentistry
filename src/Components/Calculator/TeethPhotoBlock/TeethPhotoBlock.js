import React from "react";
import schemeOfTeeth from "../img/teeth.png";
import { teethBlocks } from "../../../souurceFiles/teethArray";
import ToothBlock from "../../ToothBlock/ToothBlock";

import "./TeethPhotoBlock.scss";

const TeethPhotoBlock = () => {
  return (
    <div className="teeth-block">
      <img className="teeth-block__img" src={schemeOfTeeth} alt="" />
      <p className="teeth-block__upper-text">Верхня частина</p>
      <p className="teeth-block__lower-text">Нижня частина</p>
      <p className="teeth-block__left-text">Ліва частина</p>
      <p className="teeth-block__right-text">Права частина</p>
      {teethBlocks.map((t) => (
        <ToothBlock key={t.id} tooth={t} />
      ))}
    </div>
  );
};

export default TeethPhotoBlock;
