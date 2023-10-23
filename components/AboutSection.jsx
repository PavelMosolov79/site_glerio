//import "./MainSectionPhone.css";
import Link from "next/link"
import React from 'react';

const AboutSection = ({ func }) => {
  return (
    <header>
        <div className="main__container-header__layout">
        <div className="main__container-header__layout-logo">
            <a href="/"><img src="./logo.png" alt="Glerio-portfolio"/></a>
        </div>
        <nav>
            <ul>
            <li>
                <Link href={`/`}>Города и поселки</Link>
            </li>
            <li>
                <Link href={`/production`}>Производство и промышленность</Link>
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
  );
};

export default AboutSection;