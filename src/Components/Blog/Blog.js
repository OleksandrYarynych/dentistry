import React from "react";
import { NavLink } from "react-router-dom";

import './Blog.scss'

const Blog = () => {
  return <div className='blog-wrapper'>
    <div className='blog-main-title-block'>
      <h1 className='blog-main-title' >Блог</h1>
    </div>
    <div className="short-articles short-articles-vertical padding-25px">
        <div className="single-article" style={{width:'100%'}}>
          <NavLink to="blogarticle1" className="nav-link " style={{fontSize:'32px'}}>
            <h1 style={{ marginBottom: "25px" }}>
              Як часто потрібно міняти зубну щітку?
            </h1>
          </NavLink>
          <p style={{ marginBottom: "10px" ,lineHeight:'150%',fontSize:'24px' }} className='bigger-article-font'>
            Насамперед заміна зубної щітки залежить від індивідуальної техніки
            чищення зубів☝🏼⠀Проте, за загальними правилами, рекомендується
            міняти щітку ( або насадки, якщо у вас електрична щітка) не рідше
            ніж раз в 2-3 місяці!⠀За цей термін щетинки втрачають свою
            пружність, згинаються та перестають ретельно очищувати поверхню
            зубів.В деяких електричних зубних щітках щетинки обладнані
            спеціальними індткаторами, котрі змінюють колір
          </p>
          <NavLink to="blogarticle1" className="black-link bigger-font-black-link" style={{fontSize:'20px'}}>
            Переглянути всю статтю
          </NavLink>
        </div>
        <div className="single-article" style={{width:'100%'}}>
          <NavLink to="blogarticle2" className="nav-link " style={{fontSize:'32px'}}>
            <h1 style={{ marginBottom: "25px" }}>
              Про зубну щітку ми вже писали…а тепер час розповісти про те, як
              правильно обрати зубну пасту
            </h1>
          </NavLink>
          <p style={{ marginBottom: "10px" ,lineHeight:'150%',fontSize:'24px' }} className='bigger-article-font'>
            Сьогодні ми можемо радіти колоссальному асортименту зубних
            паст.Завдяки сучасним досягненням науки і розвитку технологій для
            кожного члена сім’ї можна підібрати зубну пасту, котра відповідає
            саме його потребам.Є і «універсальні» пасти, які будуть корисні
            практично всім.⠀💭Наприклад, якщо у вас спостерігається підвищена
            чутливість зубів, то слід звернути увагу на пасту, до складу якої
            входять фтор, кальцій, стронцій:
          </p>
          <NavLink to="blogarticle2" className="black-link bigger-font-black-link" style={{fontSize:'20px'}}>
            Переглянути всю статтю
          </NavLink>
        </div>
        <div className="single-article" style={{width:'100%'}}>
          <NavLink to="blogarticle3" className="nav-link " style={{fontSize:'32px'}}>
            <h1 style={{ marginBottom: "25px" }}>
              Як побудований людський зуб?
            </h1>
          </NavLink>
          <p style={{ marginBottom: "10px" ,lineHeight:'150%',fontSize:'24px' }} className='bigger-article-font'>
            Якщо подивитися з зовнішньої сторони, то ми бачимо, що зуб твердий.
            Але це не так, насправді зуб – це ціла, взаємопов’язана між собою,
            система тканин:⠀✔️Емаль – найтвердіша тканина в людському організмі,
            що складається з 97% мінеральних речовин.⠀✔️Дентин складає основу
            зуба. Це жорстка тканина, що знаходиться між емаллю і коренем
            зуба.⠀✔️Пульпа – це м’яка тканина, що
          </p>
          <NavLink to="blogarticle3" className="black-link bigger-font-black-link" id="m-top" style={{fontSize:'20px'}}>
            Переглянути всю статтю
          </NavLink>
        </div>
      </div>
  </div>;
};

export default Blog;
