import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CustomButton from "../../customComponents/Button";
import AddedDiseasesList from "./addedDiseasesList";
import { teethBlocks } from "../../../souurceFiles/teethArray";
import Sum from "./Sum";

import "./diseasesList.scss";

const DiseasesItemList = () => {
  const [selectedTooth, setSelectedTooth] = useState(teethBlocks[0]); //номер зуба вибраного в селекті
  const [selectedDiseases, setSelectedDiseases] = useState(
    selectedTooth.diseasesId[0]
  );
  const diseases = [...selectedTooth.diseasesId];
  const [addedDiseases, setAddedDiseases] = useState([]);
  const [priceSum, setPriceSum] = useState(0);

  useEffect(() => {
    const sum = addedDiseases.reduce((sum, d) => {
      return (sum += d.price);
    }, 0);
    setPriceSum(sum);
  }, [addedDiseases]);

  const handleChangeToothSelect = (e) => {
    setSelectedTooth(e.target.value);
  };

  const handleChangeDiseasesSelect = (e) => {
    setSelectedDiseases(e.target.value);
  };

  const addDisease = (toothNumber, diseaseName, price) => {
    const disease = {
      id: addedDiseases.length + 1,
      toothNumber: toothNumber,
      diseaseName: diseaseName,
      price: price,
    };
    setAddedDiseases([...addedDiseases, disease]);
  };

  const remuveDisease = (id) => {
    let arr = [...addedDiseases];
    arr = arr.filter((d) => d.id !== id);
    setAddedDiseases(arr);
  };

  return (
    <div>
      <form className="diseases-list-form">
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Оберіть зуб з яким у Вас проблема
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{ marginRight: "20px" }}
            value={selectedTooth}
            onChange={handleChangeToothSelect}
          >
            {teethBlocks.map((t) => (
              <MenuItem key={t.id} value={t}>
                {t.number}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Оберіть діагноз</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{ marginRight: "20px" }}
            value={selectedDiseases}
            onChange={handleChangeDiseasesSelect}
          >
            {diseases.map((d, i) => (
              <MenuItem key={i} value={d}>
                {d.diseaseName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <CustomButton
          className="m-top"
          onClick={() =>
            addDisease(
              selectedTooth.number,
              selectedDiseases.diseaseName,
              selectedDiseases.price
            )
          }
        >
          Додати діагноз
        </CustomButton>
      </form>
      <div>
        <AddedDiseasesList
          addedDiseases={addedDiseases}
          remuveDisease={remuveDisease}
        />
        <Sum sum={priceSum} />
      </div>
    </div>
  );
};

export default DiseasesItemList;
