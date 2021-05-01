import React, { useState, useEffect } from "react";
import CustomButton from "../../../customComponents/Button";
import InputFeld from "../../../customComponents/Input";

import "./ThirdBlock.scss";

const ThirdBlock = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEnteredEmailValid, setIsEnteredEmailValid] = useState(false);

  useEffect(() => {
    setIsEnteredEmailValid(false);
  }, [enteredEmail]);

  const sendEmail = () => {
    const regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsEnteredEmailValid(regularExpression.test(enteredEmail));
    if (isEnteredEmailValid && enteredEmail) {
      alert("Ваш імей успішно надіслано");
      setIsEnteredEmailValid(false);
      setEnteredEmail("");
    } else {
      setIsEnteredEmailValid(true);
    }
  };

  return (
    <div className="main-third-block">        <p className="main-third-block">
    Залишіть свою електронну адресу для зворотнього зв’язку.
  </p>
      <div className="main-third-block-wrapper">
        <InputFeld
          label="Введіть email"
          placeholder="abc123@abc.abc"
          error={isEnteredEmailValid}
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
        />
        <CustomButton onClick={sendEmail}>Надіслати</CustomButton>
      </div>
    </div>
  );
};

export default ThirdBlock;
