import { useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css'

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

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
