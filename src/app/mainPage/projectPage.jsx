import React from 'react';
import { Link, useParams } from 'react-router-dom';
import projectsData from '../all_project.json';

const ProjectPage = () => {
  const { id } = useParams(); // Получаем ID проекта из URL

  const project = projectsData.projects.find((project) => project.id === id);

  if (!project) {
    return <div>Проект не найден</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      {/* Дополнительная информация о проекте */}
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default ProjectPage;