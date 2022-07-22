import { NextPage } from 'next';
import Image from 'react-bootstrap/Image';
import styles from '../styles/Footer.module.scss';
import useFooter from '../hook/useFooter';
import NavList from './NavList';

const Footer: NextPage = () => {
  const { isFooterHovered, toggleIsFooterHovered, currentYear, scrollToTop } =
    useFooter();

  return (
    <footer
      className={styles.footer}
      onMouseEnter={toggleIsFooterHovered}
      onMouseLeave={toggleIsFooterHovered}
    >
      <div className={styles.container}>
        <div
          className={`d-flex justify-content-between py-5 mx-4 ${styles.linkContainer}`}
        >
          <div className={`d-block d-md-flex align-items-end `}>
            <Image
              src="/DEPT-LOGO-White.svg"
              className="d-none d-md-block pe-5"
              height={25}
            />
            <NavList className={`${styles.navItem} pb-4 pb-md-0`} isBriefList />
          </div>
          <div className="d-flex flex-column d-md-none ">
            <Image src="/Facebook.svg" className="mb-3" height={20} />
            <Image src="/Twitter.svg" className="mb-3" height={20} />
            <Image src="/Instagram.svg" className="mb-3" height={20} />
          </div>
        </div>
        <div className="d-block d-md-flex py-5 px-4">
          <a href="#Chamber" className={styles.footerItem}>
            Chamber of Commerce: 63464101
          </a>
          <a href="#VAT" className={styles.footerItem}>
            VAT: NL 8552.47.502.B01
          </a>
          <a href="#Terms" className={styles.footerItem}>
            Terms and conditions
          </a>

          <div className={`${styles.copyrightText} py-4 py-md-0 text-md-end `}>
            © {currentYear} Dept Agency
          </div>
        </div>
      </div>
      <div
        className={`d-none d-md-flex opacity-${
          isFooterHovered ? '100' : '0'
        }  ${styles.arrowContainer}`}
        onClick={scrollToTop}
      >
        <span>
          <img src="/Arrow.svg" height={20} />
          <br />
          Top
        </span>
      </div>
    </footer>
  );
};

export default Footer;
