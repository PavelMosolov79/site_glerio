"use client";
import MainSection from "./MainPage/mainSection/MainSection";
import FoterSection from "./MainPage/foterSection/FoterSection";
import WelcomeSection from "./MainPage/welcomeSection/welcomeSection";
import ProjectSection from "./MainPage/projectSection/ProjectSection";
import projectsData from "../all_project.json"
import { useRef } from "react";

const MainPage = () => {
  const fullpage = useRef(null);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    fullpage.current.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });  
  };

  return (
    <div className="fullpage__container">
    <div ref={fullpage}>
      <section id='mainSection'>
        <MainSection func={scrollToElement} />
      </section>
      <section id='Section'>
        <WelcomeSection func={scrollToElement} />
      </section>
      <section id='projectSection'>
        <ProjectSection projects={projectsData.projects} func={scrollToElement} />
      </section>
      <section id='FoterSection'>
        <FoterSection func={scrollToElement} />
      </section>
    </div>
  </div>
  )
}

export default MainPage;