//import "./MainSectionPhone.css";


import Link from "next/link"

import React from 'react';
import BackgroundSlider from './Slider/BackgroundSlider';

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
          <a href="https://glerio.ru/contact" className="button__contact">СВЯЗАТЬСЯ С НАМИ</a>
        </div>
      </div>
    </div>
  );
};

export default MainSection;