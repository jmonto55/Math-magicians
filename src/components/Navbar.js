import { Link } from 'react-router-dom';
import styles from '../sass/Navbar.module.scss';

const Navbar = () => {
  const linkStyles = {
    color: '#e7e7e7',
    textDecoration: 'none',
    fontSize: '1.2rem',
  };
  return (

    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        <li>
          <Link style={linkStyles} to="/">Home</Link>
        </li>
        <li>
          <Link style={linkStyles} to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link style={linkStyles} to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
