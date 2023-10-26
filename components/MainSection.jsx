//import "./MainSectionPhone.css";


import Link from "next/link"
import React, { useState } from 'react';

import BackgroundSlider from './Slider/BackgroundSlider';

const MainSection = ({ func }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main">
      <div className="main__container">
        <header>
          <div className="main__container-header__layout">
            <div className="main__container-header__layout-logo">
              <a href="/"><img src="./logo.png" alt="Glerio-portfolio"/></a>
            </div>
            <nav>
              <ul>
                <li>        
                  <Link href={`/`} style={{textDecoration: "solid underline #FFBD0C 3px"}}>Города и поселки</Link>
                </li>
                <li>
                  <Link href={`/production`}>Производство и промышленность</Link>
                </li>
                <li>
                  <Link href={`/shop`}>Офисы и магазины</Link>
                </li>
                <li>
                  <Link href={`/hcs`}>ЖКХ и прочее строительство</Link>
                </li>
              </ul>
            </nav>
            <div className="main__container-header__layout-dropdown">
              <button className="main__container-header__layout-dropbtn" onClick={toggleMenu}>
                <img src="./svg-files/menu.svg" alt="button menu"/>
              </button>
              <div className="menu__drop">
                {isMenuOpen && (
                  <div class="main__container-header__layout-dropdown-content">
                    <ul>
                      <li>        
                        <Link href={`/`}>Города и поселки</Link>
                      </li>
                      <li>
                        <Link href={`/production`}>Производство и<br/>промышленность</Link>
                      </li>
                      <li>
                        <Link href={`/shop`}>Офисы и магазины</Link>
                      </li>
                      <li>
                        <Link href={`/hcs`}>ЖКХ и прочее<br/>строительство</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        <BackgroundSlider/>
        <div className="shadow__main"></div>
        <div className="main__button">
          <h2>примеры</h2>
          <h1>НАШИХ РАБОТ</h1>
          <a href="https://glerio.ru/contact" className="button__contact">СВЯЗАТЬСЯ С НАМИ</a>
        </div>
      </div>
    </div>
  );
};

export default MainSection;