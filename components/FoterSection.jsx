import Link from "next/link"

import React from 'react';

const FoterSection = () => {

  return (
    <footer>
      <div className="foter__block">
        <div className="foter__block-menu">
          <ul>
            <li>        
              <Link href={`/`}>Города и поселки</Link>
            </li>
            <li>
              <Link href={`/production`}>Производство и промышленность</Link>
            </li>
            <li>
              <Link href={`/shop`}>Офисы и магазины</Link>
            </li>
            <li>
              <Link href={`/hcs`}>ЖКХ и прочее строительство</Link>
            </li>
          </ul>
        </div>
        <div className="foter__block-street">
          <a>г. СПб, ул. Пионерстроя, дом 23, лит. Б<br/>г. Новосибирск, ул. Николая Островского 49к2, офис 2<br/><br/>Пн—Пт, Вс 9:00 — 18:00<br/>8 (812) 60-60-140</a>
        </div>
        <div className="foter__block-logo">
          <div>
            <Link href={`/studio`}>Для разработчиков</Link>
            <img src="./logo.png" alt="glerio"/>
            <a>©️ 2023 Copyright</a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FoterSection;