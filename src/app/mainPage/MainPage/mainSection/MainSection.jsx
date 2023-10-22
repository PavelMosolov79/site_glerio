import "./MainSectionPhone.css";
import "./MainSectionDesctop.css"

import Link from "next/link"

import React from 'react';
import BackgroundSlider from '../../Slider/BackgroundSlider';

const MainSection = ({ func }) => {
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
                  <a href="">Города и поселки</a>
                </li>
                <li>
                  <a href="">Производство и промышленность</a>
                </li>
                <li>
                  <a href="">Офисы и магазины</a>
                </li>
                <li>
                  <a href="">ЖКХ и прочее строительство</a>
                </li>
              </ul>
            </nav>
            {/* <div class="main__container-header__layout-dropdown">
              <button class="main__container-header__layout-dropbtn">
                <img src="./menu.svg" alt="button menu"/>
              </button>
              <div class="main__container-header__layout-dropdown-content">
                <a href="/services/hairdresser">Услуги парикмахера</a>
                <a href="/services/manicure">Маникюр и педикюр</a>
                <a href="/services/depilation">Депиляция</a>
                <a href="/services/eyebrows">Брови и ресницы</a>
                <a href="/news">Акции</a>
                <a href="/vacancy">Вакансии</a>
                <a href="/contacts">Контакты</a>
              </div>
            </div> */}
          </div>
        </header>
        <BackgroundSlider/>
        <div className="shadow__main"></div>
        <div className="main__button">
          <h2>примеры</h2>
          <h1>НАШИХ РАБОТ</h1>
          <button className="button__contact">СВЯЗАТЬСЯ С НАМИ</button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;