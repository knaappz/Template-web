import '../Header/Header.css';
import { Link } from 'react-router-dom';

export default function NavLinks() {
  return (
    <section className='nav-links'>
      <Link to="/portfolio">Portfolio</Link>
      <a href="/#about">O mnie</a>
      <a href="/#contact">Kontakt</a>
    </section>
  );
}
