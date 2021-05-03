import React,{useState} from "react";
import CustomButton from "../customComponents/Button";
import TextArea from "../customComponents/TextFeld";

import "./FullArticles.scss";

const ThirdFullArticle = () => {
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
        Як побудований людський зуб?
        </h1>
      </div>
      <p className="full-article-text">
      Якщо подивитися з зовнішньої сторони, то ми бачимо, що зуб твердий. Але це не так, насправді зуб – це ціла, взаємопов’язана між собою, система тканин:
      </p>
      <p className="full-article-text">
      ✔️Емаль – найтвердіша тканина в людському організмі, що складається з 97% мінеральних речовин.
      </p>
      <p className="full-article-text">
      ✔️Дентин складає основу зуба. Це жорстка тканина, що знаходиться між емаллю і коренем зуба.
      </p>
      <p className="full-article-text">
      ✔️Пульпа – це м’яка тканина, що містить кровоносні судини, нерви і сполучну тканину. Пульпа забезпечує харчування зуба в процесі його росту і розвитку.
      </p>
      <p className="full-article-text">
      ✔️Кореневий канал, який є порожниною всередині зуба, що містить тканину пульпи. Опорні зв’язки оточують корінь зуба і утримують наші зуби в лунках щелепних кісток.
      </p>
      <p className="full-article-text">
      ✔️Корені зубів надійно закріплені кісткою.
      </p>
      <p className="full-article-text">
      ✔️Корінь – це частина зуба, яка знаходиться під яснами. Корінь зуба зазвичай вдвічі довший, ніж коронка
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

export default ThirdFullArticle;
