import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import projectsData from '../all_project.json';
import AboutSection from '../components/AboutSection'
import FoterSection from '../components/FoterSection'

export default function About() {
    const router = useRouter();
    const { id } = router.query;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };
      
    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    // Функция для поиска проекта по id
    const findProjectById = (projectId) => {
        return projectsData.projects.find((project) => project.id === projectId);
    };

    const project = findProjectById(id);

    if (!project) {
        return <div>Проект не найден</div>;
    }

    return (
        <main className='About'>
            <AboutSection />
            <div className='about__return'>
                <h2>Галерея</h2>
                <Link className='about__return-link' href="/">Назад</Link>
            </div>
            <h1>{project.name}</h1>
            {project.description !== 'none' && <p>{project.description}</p>}
            <div className='aboyt__layout-photos'>
                <div className='about__main-photo'>
                    {project.image && <img src={project.image} alt={`Главное фото`}/>}
                </div>
                <div className='about__main-mini__photo' style={{ display: project.photo[0]?.path === 'none' ? 'none' : 'block' }}>
                    {project.photo[0] && project.photo[0].path !== 'none' && (
                        project.photo.map((photo, index) => (
                            <img key={index} src={photo.path} alt={`Фото ${index + 1}`} onClick={() => openModal(photo.path)}/>
                        ))
                    )}
                </div>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <img src={selectedImage} alt="Увеличенное фото" />
                    </div>
                </div>
            )}
            <div className='about__video'>
                {project.video && project.video !== 'none' && (
                    <div>
                        <h2>Видео</h2>
                        <div className='about__video-layout'>
                            <video controls>
                                <source src={project.video} type="video/mp4" />
                                Ваш браузер не поддерживает видео.
                            </video>
                        </div>
                    </div>
                )}
            </div>
            <div className='about__information'>
                <h3>Информация</h3>
                <p>Адрес: {project.adress}</p>
                <p>Дата: {project.data}</p>
            </div>
            <div className='about__lamp'>
                <h3>Лампы используемые в проекте</h3>
                <div className='about__lamp-blocks'>
                    {project.lamp && project.lamp.map((lamp) => (
                        <div className='about__lamp-block' key={lamp.id}>
                            <p>Название лампы: {lamp.name}</p>
                            <p>Артикул: {lamp.article}</p>
                            <p>Количество: {lamp.quantity}</p>
                            <div className='about__lamp-block__img'>
                                {lamp.path && <img src={`${lamp.path}/${lamp.id}`} alt={lamp.name} />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FoterSection />
        </main>
    );
}
