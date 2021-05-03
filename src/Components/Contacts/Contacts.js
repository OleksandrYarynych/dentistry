import React, { useEffect, useState } from "react";
import InputFeld from "../customComponents/Input";
import TextArea from "../customComponents/TextFeld";
import CustomButton from "../customComponents/Button";

import "./Contacts.scss";

const Contacts = () => {
  const [name, setName] = useState({
    enteredName: "",
    error: false,
    errorText: "",
  });
  const [email, setEmail] = useState({
    enteredEmail: "",
    error: false,
    errorText: "",
  });
  const [message, setMessage] = useState({
    entereedMessage: "",
    error: false,
    errorText: "",
  });

  useEffect(() => {
    setMessage({ ...message, error: false, errorText: "" });
  }, [message.entereedMessage]);

  useEffect(() => {
    setName({ ...name, error: false, errorText: "" });
  }, [name.enteredName]);

  useEffect(() => {
    setEmail({ ...email, error: false, errorText: "" });
  }, [email.enteredEmail]);

  const submitForm = () => {
    if (name.enteredName === "") setName({ ...name, error: true });
    if (email.enteredEmail === "") setEmail({ ...email, error: true });
    if (message.entereedMessage === "") setMessage({ ...message, error: true });
    if (name.enteredName && email.enteredEmail && message.entereedMessage) {
      alert("Ваші дані успішно надіслані");
      setMessage({
        entereedMessage: "",
        error: false,
        errorText: "",
      });
      setName({
        enteredName: "",
        error: false,
        errorText: "",
      });
      setEmail({
        enteredEmail: "",
        error: false,
        errorText: "",
      });
    }
  };

  return (
    <div className="contacts-wrapper">
      <div className="contacts-title-block">
        <h1 className="contacts-title">Контакти</h1>
      </div>
      <div className="contacts-info-wrapper">
        <div className="contacts-addres">
          <h1 className="contacts-small-title">Зв’яжись з нами</h1>
          <p className="contacts-small-text">вул. Джерельна 23</p>
          <p className="contacts-small-text">м. Львів</p>
          <p className="contacts-small-text">Україна</p>
          <p className="contacts-small-text">dentlife.linnyk@gmail.com</p>
          <p className="contacts-small-text">097 304 98 99</p>
          <div style={{ display: "flex", marginTop: "25px" }}>
            <div className="footer-link blue">
              <a href="https://www.facebook.com/Dentlinn-113129353887446">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="footer-link red">
              <a href="https://www.instagram.com/dentlinn/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contacts-from">
          <h1 className="contacts-small-title">Надішліть повідомлення</h1>
          <InputFeld
            label="Ім'я"
            value={name.enteredName}
            onChange={(e) => setName({ ...name, enteredName: e.target.value })}
            error={name.error}
            required={true}
            fullWidth={true}
          />
          <InputFeld
            label="Email"
            required={true}
            value={email.enteredEmail}
            onChange={(e) =>
              setEmail({ ...email, enteredEmail: e.target.value })
            }
            error={email.error}
            fullWidth={true}
          />
          <TextArea
            label="Повідомлення"
            required={true}
            value={message.entereedMessage}
            onChange={(e) =>
              setMessage({ ...message, entereedMessage: e.target.value })
            }
            error={message.error}
            fullWidth={true}
          />
          <div style={{ marginTop: "20px" }}>
            {" "}
            <CustomButton onClick={submitForm}>Надіслати</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
