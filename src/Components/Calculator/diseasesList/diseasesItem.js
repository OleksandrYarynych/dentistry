import React from "react";

import "./diseasesList.scss";

const DiseasesItem = (props) => {
  const { disease, remuveDisease } = props;

  const deleteDisease = () => {
    remuveDisease(disease.id);
  };

  return (
    <tr className="disease-list__item">
      <td className="first-column">
        <p className="disease-list__text">{disease.toothNumber}</p>
      </td>
      <td className="second-column">
        <p className="disease-list__text">{disease.diseaseName}</p>
      </td>
      <td className="third-column">
        <p className="disease-list__text">{disease.price}</p>
      </td>
      <td className="fourth-column">
        <button className="delete-btn" onClick={() => deleteDisease()}>
          <i class="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default DiseasesItem;
