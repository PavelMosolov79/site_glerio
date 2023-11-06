import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { BrowserRouter as Router } from 'react-router-dom';

function CustomRouter({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Ваши действия, зависящие от маршрутизации, могут быть выполнены здесь
  }, [router]);

  return <Router>{children}</Router>;
}

export default CustomRouter;