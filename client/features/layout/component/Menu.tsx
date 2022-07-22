import { NextPage } from 'next';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import styles from '../styles/Menu.module.scss';
import NavList from './NavList';
import { MenuProps } from '../interfaces';

const Menu: NextPage<MenuProps> = (props) => {
  const { isOpen, toggle } = props;
  return (
    <Modal
      show={isOpen}
      fullscreen
      onHide={toggle}
      className={styles.container}
    >
      <Modal.Header closeButton closeVariant="white" className="border-0">
        <Modal.Title>
          <img src="/icons/DEPT-LOGO-White.svg" height={20} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavList className={styles.menuItem} />

          <div className={styles.menuBottom} />
        </Nav>
      </Modal.Body>
    </Modal>
  );
};

export default Menu;
