import Link from 'next/link';
import MainSection from '../components/MainSection'
import WelcomeSection from '../components/WelcomeSection'
import ProjectSection from '../components/ProjectSection'
import FoterSection from '../components/FoterSection'

export default function Home() {
    return (
        <main>
            <MainSection/>   
            <WelcomeSection/>   
            <ProjectSection/>   
            <FoterSection/>
        </main>
    );
}