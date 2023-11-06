import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import projectsData from '../all_project.json';

const ProductionSection = () => {
  const itemsPerPage = 9;
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [activeButton, setActiveButton] = useState('ВСЕ');
  const [endOfProjects, setEndOfProjects] = useState(false);
  let filteredProjects = [];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const loadMore = () => {
    const filteredProjects = filterProjectsByCategory(activeButton);
    const nextBatch = filteredProjects.slice(loadedCount, loadedCount + itemsPerPage);

    if (nextBatch.length > 0) {
      setDisplayedProjects([...displayedProjects, ...nextBatch]);
      setLoadedCount(loadedCount + itemsPerPage);
    } else {
      // Если больше нет элементов для загрузки, устанавливаем endOfProjects в true
      setEndOfProjects(true);
    }
  };

  const filterProjectsByCategory = (category) => {
    if (category === 'ВСЕ') {
      return projectsData.projects.filter((project) => project.activity === 'production');
    }
    return projectsData.projects.filter((project) => {
      if (category === 'УЛИЦА') {
        return project.activity === 'production' && project.place === 'street';
      } else if (category === 'ПОМЕЩЕНИЕ') {
        return project.activity === 'production' && project.place === 'room';
      } else if (category === 'ВИДЕО') {
        return project.activity === 'production' && project.video !== 'none';
      }
      return true;
    });
  };

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
    const filteredProjects = filterProjectsByCategory(buttonText);
    setDisplayedProjects(filteredProjects.slice(0, itemsPerPage));
    setLoadedCount(itemsPerPage);
  };

  useEffect(() => {
    const initialBatch = filterProjectsByCategory('ВСЕ').slice(0, itemsPerPage);
    setDisplayedProjects(initialBatch);
    setLoadedCount(itemsPerPage);
  }, []);

  return (
    <div className="project">
      <div>
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
                  <Link href={`/production`}  style={{textDecoration: "solid underline #FFBD0C 3px"}}>Производство и промышленность</Link>
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
              <div className="menu__drop" style={{ display: isMenuOpen ? 'block' : 'none' }}>
                {isMenuOpen && (
                  <div className="main__container-header__layout-dropdown-content">
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
      </div>
      <h1 style={{backgroundColor: '#ABABAB', color: 'white' ,textAlign: 'center', marginBlockEnd: '0px', marginBlockStart: '0px'}}>Производство и промышленность</h1>
      <div className="project__title">
        <div className="project__title-text">
          <h2>НАШИ <a style={{ backgroundColor: '#FFBD0C' }}>РАБОТЫ</a></h2>
          <h3>РЕАЛЬНЫЕ ПРОЕКТЫ</h3>
        </div>
        <div className='project__title__img'>
          <img src='./svg-files/point.svg' />
        </div>
      </div>
      <div className="project__buttons">
        {['ВСЕ', 'УЛИЦА', 'ПОМЕЩЕНИЕ', 'ВИДЕО'].map((buttonText) => (
          <button key={buttonText}
            className={activeButton === buttonText ? 'active' : ''}
            onClick={() => handleButtonClick(buttonText)}>{buttonText}
          </button>
        ))}
      </div>
      <div className="project__blocks">
        <div className="projects">
          {displayedProjects.map((project, index) => (
            <div className="project_block" key={index}>
              <Link href={`/about?id=${project.id}`}>
                <img src={project.image} alt={project.name} />
                <div className="project_block-img"></div>
                <h3>{project.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="button__do-block">
        {!endOfProjects && displayedProjects.length < filteredProjects.length && (
          <button className="button__do" onClick={loadMore}>Загрузить еще</button>
        )}
      </div>
    </div>
  );
};

export default ProductionSection;
