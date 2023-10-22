import "./FoterSectionPhone.css";
import "./FoterSectionDesctop.css"

const FoterSection = ({ func }) => {

  return (
    <footer>
      <div className="foter__block">
        <div className="foter__block-menu">
          <ul>
            <li>
              <a href="/services/hairdresser">Услуги парикмахера</a>
            </li>
            <li>
              <a href="/services/manicure">Маникюр и педикюр</a>
            </li>
            <li>
              <a href="/services/depilation">Депиляция</a>
            </li>
            <li>
              <a href="/services/eyebrows">Брови и ресницы</a>
            </li>
            <li>
              <a href="/news">Новости и акции</a>
            </li>
            <li>
              <a href="/vacancy">Вакансии</a>
            </li>
            <li>
              <a href="/contacts">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="foter__block-street">
          <a>ул. Зорге 133/2<br/>ПН - СБ: 09:00 - 20:00<br/>+ 7 (383) 263-70-12</a>
        </div>
        <div className="foter__block-logo">
          <div>
            <img src="./logo-black.svg" alt="Venera"/>
            <a>©️ Venera</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FoterSection;