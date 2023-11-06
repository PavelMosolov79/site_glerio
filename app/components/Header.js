import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/production">Production</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/hcs">Hcs</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;