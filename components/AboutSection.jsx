//import "./MainSectionPhone.css";
import Link from "next/link"
import React, { useState} from 'react';

const AboutSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

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
    );
};

export default AboutSection;