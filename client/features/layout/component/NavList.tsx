import { NextPage } from 'next';
import Link from 'next/link';
import { navItems } from '../lib/constants';
import useNavList from '../hook/useNavList';
import { NavListProps } from '../interfaces';

const NavList: NextPage<NavListProps> = (props) => {
  const { className, isBriefList } = props;
  const { isArrowVisible } = useNavList(props);
  return (
    <>
      {navItems.map((item, index) => (
        <Link key={item.title + index} href={item.link}>
          <a
            className={`${
              isBriefList && index == 0 ? 'd-none' : ''
            }  ${className}`}
          >
            {isArrowVisible(item.title) ? (
              <img src="/Select-Arrow.svg" height={25} className={`mx-2 `} />
            ) : null}
            {item.title}
          </a>
        </Link>
      ))}
    </>
  );
};

export default NavList;