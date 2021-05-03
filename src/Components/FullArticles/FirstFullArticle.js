import React, { useState } from "react";
import CustomButton from "../customComponents/Button";
import TextArea from "../customComponents/TextFeld";

import "./FullArticles.scss";

const FirstFullArticle = () => {
  const [userMessage, setUserMessage] = useState("");

  const sendComment=()=>{
    if(userMessage){
      alert('Ваш коментар надіслано')
      setUserMessage('')
    }
  }

  return (
    <div className="fuul-article-wrapper">
      <div className="fuul-article-title-block">
        <h1 className="fuul-article-title">
          Як часто потрібно міняти зубну щітку?
        </h1>
      </div>
      <p className="full-article-text">
        Насамперед заміна зубної щітки залежить від індивідуальної техніки
        чищення зубів☝🏼
      </p>
      <p className="full-article-text">
        Проте, за загальними правилами, рекомендується міняти щітку ( або
        насадки, якщо у вас електрична щітка) не рідше ніж раз в 2-3 місяці!
      </p>
      <p className="full-article-text">
        За цей термін щетинки втрачають свою пружність, згинаються та перестають
        ретельно очищувати поверхню зубів. В деяких електричних зубних щітках
        щетинки обладнані спеціальними індткаторами, котрі змінюють колір при
        необхідності зміни насадки👌🏼
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
        <CustomButton onClick={()=>sendComment()}>Надіслати відгук</CustomButton>
      </div>
    </div>
  );
};

export default FirstFullArticle;
