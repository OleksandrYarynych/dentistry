import React from "react";
import DiseasesItem from "./diseasesItem";

const AddedDiseasesList = (props) => {
  const { addedDiseases, remuveDisease } = props;

  return (
    <div className="diseases-list__wrapper">
      <th className="disease-list__item table-header">
        <td className="first-column">
          <p className="disease-list__text">Номер зуба</p>
        </td>
        <td className="second-column">
          <p className="disease-list__text">Діагноз</p>
        </td>
        <td className="third-column">
          <p className="disease-list__text">Ціна в грн</p>
        </td>
        <td className="fourth-column"></td>
      </th>
      {addedDiseases.length === 0 ? (
        <p>Ви ще не додали жодної хвороби</p>
      ) : (
        addedDiseases.map((d) => (
          <DiseasesItem key={d.id} disease={d} remuveDisease={remuveDisease} />
        ))
      )}
    </div>
  );
};

export default AddedDiseasesList;
