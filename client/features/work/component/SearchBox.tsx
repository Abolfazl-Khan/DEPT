import { NextPage } from 'next';
import Collapse from 'react-bootstrap/Collapse';
import useSearchBox from '../hook/useSearchBox';
import styles from '../styles/SearchBox.module.scss';
import { FilterTypes } from '../interfaces';
import SearchItem from './SearchItem';

const SearchBox: NextPage = () => {
  const {
    getSelectedIndustry,
    getSelectedCategory,
    isFliterListOpen,
    filterType,
    toggleFilterCollapse,
    categoriesData,
    industriesData,
  } = useSearchBox();

  return (
    <div className={styles.container}>
      <div className="d-flex justify-content-between">
        <p className={styles.text}>
          Show me{' '}
          <span id={FilterTypes.CATEGORY} onClick={toggleFilterCollapse}>
            {getSelectedCategory().title}
          </span>
        </p>
        <p className={styles.text}>
          in{' '}
          <span id={FilterTypes.INDUSTRY} onClick={toggleFilterCollapse}>
            {getSelectedIndustry().title}
          </span>
        </p>
      </div>
      <Collapse in={isFliterListOpen}>
        <div>
          <div
            className={`d-flex justify-content-md-${
              filterType === FilterTypes.INDUSTRY ? 'end' : 'start'
            }`}
          >
            <SearchItem
              isVisible={filterType === FilterTypes.CATEGORY}
              filterType={filterType}
              itemData={categoriesData}
            />
            <SearchItem
              isVisible={filterType === FilterTypes.INDUSTRY}
              filterType={filterType}
              itemData={industriesData}
            />
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default SearchBox;
