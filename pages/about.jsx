import Link from 'next/link';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import AboutSection from '../components/AboutSection'

import imageUrlBuilder from '@sanity/image-url';
import { client } from '../lib/client';
import {loadPosts} from './api/posts'

export default function About() {
    const [initialPosts, setInitialPosts] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    const LOAD_MORE_STEP = 9

    useEffect(() => {
        const fetchData = async () => {
        try {
            const { posts } = await loadPosts(0, LOAD_MORE_STEP);
            setInitialPosts(posts);
        } catch (error) {
            console.error('Error loading posts:', error);
        }
        };

        fetchData();
    }, []);

    const post = initialPosts && initialPosts.find((project) => project.name === id);

    if (!post) {
        console.log("name",initialPosts)
        return <div>Проект не найден</div>;
    }

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    const urlFor = (source) => {
        const builder = imageUrlBuilder(client);
        return builder.image(source);
    };

    if (!post) {
        return <div>Проект не найден</div>;
    }

    return (
        <main className="About">
            <AboutSection/>
            <div className="about__return">
                <h2>Галерея</h2>
                <Link className="about__return-link" href="/">Назад</Link>
            </div>
            <h1>{post.name}</h1>
            {post.description !== 'none' && <p>{post.description}</p>}
            <div className="about__layout-photos">
                <div className="about__main-photo">
                    {post.image && (
                        <img src={urlFor(post.image).url()} alt={`Главное фото`} />
                    )}
                </div>
                {post && post.photo && post.photo[0] && (
                    <div
                        className="about__main-mini__photo"
                        style={{ display: post.photo[0]?.path === 'none' ? 'none' : 'block' }}
                    >
                        {post.photo[0].path !== 'none' && (
                            post.photo.map((photo, index) => (
                                <img
                                    key={index}
                                    src={urlFor(photo.path).url()}
                                    alt={`Фото ${index + 1}`}
                                    onClick={() => openModal(urlFor(photo.path).url())}
                                />
                            ))
                        )}
                    </div>
                )}
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
            <div className="about__video">
                {post.video && post.video !== 'none' && (
                    <div>
                        <h2>Видео</h2>
                        <div className="about__video-layout">
                            <video controls>
                                <source src={post.video} type="video/mp4" />
                                Ваш браузер не поддерживает видео.
                            </video>
                        </div>
                    </div>
                )}
            </div>
            <div className="about__information">
                <h3>Информация</h3>
                <p>Адрес: {post.address}</p>
                <p>Дата: {post.data}</p>
            </div>
            <div className="about__lamp-blocks">
                {post.lamps && post.lamps.map((lamp, index) => (
                    <div className="about__lamp-block" key={index}>
                        <p>Название лампы: {lamp.name}</p>
                        <p>Артикул: {lamp.article}</p>
                        <p>Количество: {lamp.quantity}</p>
                        <div className="about__lamp-block__img">
                            {lamp.image && (
                                <img
                                    src={urlFor(lamp.image).url()}
                                    alt={lamp.name}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export const getServerSideProps = async () => {
    let posts_one = null
    try {
      const { posts} = await loadPosts(0, LOAD_MORE_STEP);
      console.log("getServerSideProps", posts)
      posts_one = posts
    } catch (error) {
      console.error('Error loading posts:', error);
      return {
        props: {
          initialPosts: null,
        }
      };
    } finally {
      console.log("getServerSideProps posts_one", posts_one)
      if (posts_one) {
        return {
          props: {
            initialPosts: posts_one,
          }
        };
      } else {
        return {
          props: {
            initialPosts: null,
          }
        };
      }
    }
  }