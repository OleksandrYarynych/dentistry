import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className='nav-wrapper'>
      <div className="nav">
        <span className="company-name">
          <p><NavLink to='/main' className="nav-link company-name-up-text">Студія стоматології</NavLink></p>
          <p className="company-name-down-text">Лінник Уляни Ярославівни</p>
        </span>
        <ul className='links-list'>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="active-nav-link"
              to="/main"
            >
              Головна сторінка
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="active-nav-link"
              to="/blog"
            >
              Блог
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="active-nav-link"
              to="/service"
            >
              Послуги
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="active-nav-link"
              to="/contacts"
            >
              Контакти
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
