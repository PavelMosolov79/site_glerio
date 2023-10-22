import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Проект не найден</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.name} />
      {/* Другие детали проекта */}
    </div>
  );
};

export default ProjectDetail;