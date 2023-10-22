// import "./SectionPhone.css";
import "./ProjectSectionDesctop.css"

// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import projectsData from '../../../all_project.json';

const ProjectSection = ({ projects }) => {
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
        if (category === 'ВСЕ') {
          return projectsData.projects;
        }
        return projectsData.projects.filter((project) => {
          if (category === 'УЛИЦА') {
            return project.place === 'street';
          } else if (category === 'ПОМЕЩЕНИЕ') {
            return project.place === 'room';
          } else if (category === 'ВИДЕО') {
            return project.video !== 'none';
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
        const initialBatch = projectsData.projects.slice(0, itemsPerPage);
        setDisplayedProjects(initialBatch);
        setLoadedCount(itemsPerPage);
    }, []);

    return (
        <div className="project">
            <div className="project__title">
                <div className="project__title-text">
                    <h2>НАШИ <a style={{backgroundColor: '#FFBD0C'}}>РАБОТЫ</a></h2>
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
            {/* className="project_block" */}
            <div className="project__blocks">
                <div className="projects">
                    {displayedProjects.map((project, index) => (
                        <div className="project_block" key={index}>
                            {/* <Link to={`/projectPage/${project.id}`}> */}
                                <img src={project.image} alt={project.name} />
                                <div className="project_block-img"></div>
                                <h3>{project.name}</h3>
                                {/* <Link to={`/projectPage/${project.id}`}>Подробнее</Link> */}
                            {/* </Link> */}
                        </div>
                    ))}
                </div>
            </div>
            <div className="button__do-block">
                {loadedCount < projectsData.projects.length && (
                    <button className="button__do" onClick={loadMore}>Загрузить еще</button>
                )}
            </div>
        </div>
    );
};

export default ProjectSection;