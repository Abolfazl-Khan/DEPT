import { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/TopNav.module.scss';
import useTopNav from '../hook/useTopNav';
import NavList from './NavList';
import Menu from './Menu';

const TopNav: NextPage = () => {
  const { isMenuOpen, toggleIsMenuOpen } = useTopNav();
  return (
    <Navbar expand={false} className={styles.navbar}>
      <Container fluid className={styles.container}>
        <Navbar.Brand href="#">
          <img src="/icons/DEPT-LOGO-White.svg" height={20} />
        </Navbar.Brand>
        <div className="d-flex">
          <div className="d-none d-lg-flex">
            <NavList className={styles.navItem} isBriefList />
          </div>

          <div className={styles.toggler} onClick={toggleIsMenuOpen}>
            <img src="/icons/Vector.svg" />
          </div>
          <Menu isOpen={isMenuOpen} toggle={toggleIsMenuOpen} />
        </div>
      </Container>
    </Navbar>
  );
};

export default TopNav;
