import { NextPage } from 'next';
import Link from 'next/link';
import Fade from 'react-bootstrap/Fade';
import styles from '../styles/SearchItem.module.scss';
import { SearchItemProps } from '../interfaces';
import useSearchId from '../hook/useSearchId';

const SearchItem: NextPage<SearchItemProps> = (props) => {
  const { isVisible, itemData } = props;
  const { getLinkPath, isItemSelected } = useSearchId(props);
  return (
    <Fade in={isVisible}>
      <div className={`d-${isVisible ? 'block' : 'none'} ${styles.container}`}>
        {itemData.map((item) => (
          <Link key={item.title + item.id} href={getLinkPath(item.id)}>
            <a
              className={`${styles.text} ${
                isItemSelected(item.id) && styles.isSelected
              }`}
            >
              {item.title}
            </a>
          </Link>
        ))}
      </div>
    </Fade>
  );
};

export default SearchItem;
