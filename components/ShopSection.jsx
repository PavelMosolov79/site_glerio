import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import projectsData from '../all_project.json';

const ProjectSection = () => {
    const itemsPerPage = 9;
    const [displayedProjects, setDisplayedProjects] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [activeButton, setActiveButton] = useState('ВСЕ');
  
    const loadMore = () => {
      const filteredProjects = filterProjectsByCategory(activeButton);
      const nextBatch = filteredProjects.slice(loadedCount, loadedCount + itemsPerPage);
  
      if (nextBatch.length > 0) {
        setDisplayedProjects([...displayedProjects, ...nextBatch]);
        setLoadedCount(loadedCount + itemsPerPage);
      }
    };
  
    const filterProjectsByCategory = (category) => {
      const allProjects = projectsData.projects;
      
      if (category === 'ВСЕ') {
        return allProjects.filter((project) => project.activity === 'shop');
      }
  
      const filteredShopProjects = allProjects.filter((project) => project.activity === 'shop');
  
      if (category === 'УЛИЦА') {
        return filteredShopProjects.filter((project) => project.place === 'street');
      } else if (category === 'ПОМЕЩЕНИЕ') {
        return filteredShopProjects.filter((project) => project.place === 'room');
      } else if (category === 'ВИДЕО') {
        return filteredShopProjects.filter((project) => project.video !== 'none');
      }
      return [];
    };
  
    const handleButtonClick = (buttonText) => {
      setActiveButton(buttonText);
      const filteredProjects = filterProjectsByCategory(buttonText);
      setDisplayedProjects(filteredProjects.slice(0, itemsPerPage));
      setLoadedCount(itemsPerPage);
    };
  
    useEffect(() => {
      const initialBatch = filterProjectsByCategory('ВСЕ');
      setDisplayedProjects(initialBatch.slice(0, itemsPerPage));
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
                            <Link href={`/production`}>Производство и промышленность</Link>
                            </li>
                            <li>
                            <Link href={`/shop`} style={{textDecoration: "solid underline #FFBD0C 3px"}}>Офисы и магазины</Link>
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
            </div>
            <div className="project__title">
            <div className="project__title-text">
                <h2>НАШИ <a style={{ backgroundColor: '#FFBD0C' }}>РАБОТЫ</a></h2>
                <h3>РЕАЛЬНЫЕ ПРОЕКТЫ</h3>
            </div>
            </div>
            <div className="project__buttons">
                {['ВСЕ', 'УЛИЦА', 'ПОМЕЩЕНИЕ', 'ВИДЕО'].map((buttonText) => (
                    <button
                    key={buttonText}
                    className={activeButton === buttonText ? 'active' : ''}
                    onClick={() => handleButtonClick(buttonText)}
                    >
                    {buttonText}
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
                {loadedCount < displayedProjects.length && (
                    <button className="button__do" onClick={loadMore}>Загрузить еще</button>
                )}
            </div>
        </div>
    );
  };
  
  export default ProjectSection;