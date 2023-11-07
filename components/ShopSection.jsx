import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import client, { urlFor } from '../lib/client';
import project from '@/schemas/project';

const ProjectSection = () => {
  const itemsPerPage = 9;
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [activeButton, setActiveButton] = useState('ВСЕ');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [allProjects, setAllProjects] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const loadMore = () => {
    const filteredProjects = filterProjectsByCategory(activeButton);
    const nextBatch = filteredProjects.slice(loadedCount, loadedCount + itemsPerPage);

    if (nextBatch.length > 0) {
      setDisplayedProjects([...displayedProjects, ...nextBatch]);
      setLoadedCount(loadedCount + itemsPerPage);
    }
  };

  const updateDisplayedProjects = (category) => {
    if (category === 'ВСЕ') {
      const filteredProjects = allProjects.filter((project) => project.activity === 'shop');
      setDisplayedProjects(filteredProjects);
    } else if (category === 'УЛИЦА') {
      const filteredProjects = allProjects.filter((project) => project.activity === 'shop' && project.place === 'street');
      setDisplayedProjects(filteredProjects);
    } else if (category === 'ПОМЕЩЕНИЕ') {
      const filteredProjects = allProjects.filter((project) => project.activity === 'shop' && project.place === 'room');
      setDisplayedProjects(filteredProjects);
    } else if (category === 'ВИДЕО') {
      const filteredProjects = allProjects.filter((project) => project.activity === 'shop' && project.video !== 'none');
      setDisplayedProjects(filteredProjects);
    }
  };

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
    updateDisplayedProjects(buttonText);
  };

  useEffect(() => {
    client
      .fetch(`*[_type == 'project'] {
        name,
        image,
        video,
        place,
        data,
        address,
        activity,
        "lamps": lamps[]->{
            "name": name,
            "article": article,
            "href_lamp": href_lamp,
            "image": image
        },
        photo[],
        tasks,
        description
      }`)
      .then((data) => {
        setAllProjects(data);
        const filteredData = data.filter((project) => project.activity === 'shop');
        setDisplayedProjects(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching data from Sanity:', error);
      });
  }, []);

  return (
    <div className="project">
      <header>
        <div className="main__container-header__layout">
          <div className="main__container-header__layout-logo">
            <a href="/"><img src="./logo.png" alt="Glerio-portfolio" /></a>
          </div>
          <nav>
            <ul>
              <li>
                <Link href={`/`}>Города и поселки</Link>
              </li>
              <li>
                <Link href={`/production`}  style={{ textDecoration: "solid underline #FFBD0C 3px" }}>Производство и промышленность</Link>
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
              <img src="./svg-files/menu.svg" alt="button menu" />
            </button>
            <div className="menu__drop">
              {isMenuOpen && (
                <div className="main__container-header__layout-dropdown-content">
                  <ul>
                    <li>
                      <Link href={`/`}>Города и поселки</Link>
                    </li>
                    <li>
                      <Link href={`/production`}>Производство и<br />промышленность</Link>
                    </li>
                    <li>
                      <Link href={`/shop`}>Офисы и магазины</Link>
                    </li>
                    <li>
                      <Link href={`/hcs`}>ЖКХ и прочее<br />строительство</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <h1 style={{ backgroundColor: '#ABABAB', color: 'white', textAlign: 'center', marginBlockEnd: '0px', marginBlockStart: '0px' }}>Офисы и магазины</h1>
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
              <Link href={`/about?id=${project.name}`}>
                {project.image && (
                  <img src={urlFor(project.image).url()} alt={project.name} />
                )}
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
