import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
        <span className='footer-title'>Студія стоматології Лінник Уляни Ярославівни</span>
      <div className="footer-content">
        
          <div>
            <p>вул. Джерельна 23</p>
            <p>м. Львів</p>
            <p>Україна</p>
            <p>dentlife.linnyk@gmail.com</p>
            <p>097 304 98 99</p>
          </div>
          <div style={{display:'flex'}}>
            <div className="footer-link blue">
              <a href='https://www.instagram.com/dentlinn/'>
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="footer-link red">
              <a href='https://www.facebook.com/Dentlinn-113129353887446'>
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
