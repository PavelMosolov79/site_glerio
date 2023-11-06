
"use client";

import React from 'react';

import MainSection from '../components/MainSection'
import WelcomeSection from '../components/WelcomeSection'
import ProjectSection from '../components/ProjectSection'
import FoterSection from '../components/FoterSection'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/MainSectionDesctop.css';
import '../styles/WelcomeSectionDesctop.css';
import '../styles/ProjectSectionDesctop.css';
import '../styles/AboutSectionDesctop.css';
import '../styles/FoterSectionDesctop.css';

import '../styles/MainSectionPhone.css'
import '../styles/WelcomeSectionPhone.css';
import '../styles/ProjectSectionPhone.css';
import '../styles/AboutSectionPhone.css';
import '../styles/FoterSectionPhone.css';

import {loadPosts} from './api/posts'

const LOAD_MORE_STEP = 9

export default function Home({ initialPosts }) {

  const POSTS = initialPosts

  return (
    <main>
      <MainSection/>   
      <WelcomeSection/>   
      <ProjectSection posts={POSTS}/>   
      <FoterSection/>
    </main>
  )
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