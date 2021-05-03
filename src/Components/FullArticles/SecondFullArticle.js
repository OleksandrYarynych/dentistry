import React, { useState } from "react";
import CustomButton from "../customComponents/Button";
import TextArea from "../customComponents/TextFeld";

import "./FullArticles.scss";

const SecondFullArticle = () => {
  const [userMessage, setUserMessage] = useState("");

  const sendComment = () => {
    if (userMessage) {
      alert("Ваш коментар надіслано");
      setUserMessage("");
    }
  };

  return (
    <div className="fuul-article-wrapper">
      <div className="fuul-article-title-block">
        <h1 className="fuul-article-title">
          Про зубну щітку ми вже писали…а тепер час розповісти про те, як
          правильно обрати зубну пасту
        </h1>
      </div>
      <p className="full-article-text">
        Сьогодні ми можемо радіти колоссальному асортименту зубних паст. Завдяки
        сучасним досягненням науки і розвитку технологій для кожного члена сім’ї
        можна підібрати зубну пасту, котра відповідає саме його потребам. Є і
        «універсальні» пасти, які будуть корисні практично всім.
      </p>
      <p className="full-article-text">
        💭Наприклад, якщо у вас спостерігається підвищена чутливість зубів, то
        слід звернути увагу на пасту, до складу якої входять фтор, кальцій,
        стронцій: ці компоненти зміцнюють емаль і знижують її чутливість.
      </p>
      <p className="full-article-text">
        💭У разі виникнення проблем з яснами (кровоточать і болять) можете
        почати використовувати пасту на основі трав і антисептичних речовин, але
        зрозуміло, виключно на додаток до відвідування стоматолога, так як ця
        проблема може вирішитися лише з допомогою фахівця.
      </p>
      <p className="full-article-text">
        💭Якщо ж серед членів вашої сім’ї є діти, то їм підійде паста з фтором,
        який буде насичувати емаль і зміцнювати тканини зуба. ☝️Кількість фтору
        в дитячих пастах набагато менша, ніж його допустима норма у дорослих
        аналогів.
      </p>

      <div className="full-article-share-block">
        <span className="full-article-share-block-text">Поширити цей пост</span>
        <div className="full-article-share-block-all-icons-block">
          <div className="full-article-share-block-icon-block blue-icon">
            <i class="fab fa-facebook-f "></i>
          </div>
          <div className="full-article-share-block-icon-block red-block">
            <i class="fab fa-instagram "></i>
          </div>
          <div className="full-article-share-block-icon-block light-blue-icon">
            <i class="fab fa-twitter "></i>
          </div>
        </div>
      </div>
      <div className="full-article-comment-form">
        <p className="full-article-comment-form-text">
          Надішліть нам відгук про наш пост
        </p>
        <TextArea
          label="Ваш коментар"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <CustomButton onClick={() => sendComment()}>
          Надіслати відгук
        </CustomButton>
      </div>
    </div>
  );
};

export default SecondFullArticle;
