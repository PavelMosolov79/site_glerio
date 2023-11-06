// import "./SectionPhone.css";

const WelcomeSection = () => {
  return (
    <div className="welcome">
      <div className="welcome__image">
        <div className="doe__welcome">
            <img src="./welcome.png"/>
        </div>
        <div className="svg__elipses">
            <img src="/svg-files/elipses.svg"/>
        </div>
      </div>
      <div className="welcome__text">
        <div className="welcome__text-main__hello">
            <div className="welcome__text-main__hello-text">
                <h3>ДОБРО<br/>ПОЖАЛОВАТЬ В</h3>
                <h2><a style={{backgroundColor: '#FFBD0C'}}>ГАЛЕРЕЮ</a></h2>
            </div>
            <div className="welcome__text-main__hello-svg">
                <img src="/svg-files/lines.svg"/>
            </div>
        </div>
        <div className="welcome__text-p">
            <p>На этой странице вы найдете примеры потрясающих проектов освещения, которые преобразили
                помещения и улицы. Погрузитесь в мир светотехники и давайте вместе исследовать то, как
                наши решения создают атмосферу, вдохнавляют и обеспечивают комфорт.
            </p><br/>
            <p>Не упустите шанс вдохновиться идеями для вашего следующего проекта - пройдите вниз, чтобы
                начать свой световой путь с GLERIO.
            </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;