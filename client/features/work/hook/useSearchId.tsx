import { useRouter } from 'next/router';
import { SearchItemProps, FilterTypes } from '../interfaces';

const useSearchId = (props: SearchItemProps) => {
  const { filterType } = props;
  const router = useRouter();

  const getLinkPath = (selectedId: string) => {
    let query = { ...router.query };
    if (filterType == FilterTypes.CATEGORY) query.categoryId = selectedId;
    if (filterType == FilterTypes.INDUSTRY) query.industryId = selectedId;

    return `${router.pathname}?${Object.keys(query)
      .map((item) => `${item}=${query[item]}`)
      .join('&')}`;
  };

  const isItemSelected = (itemId: string) => {
    if (
      filterType == FilterTypes.CATEGORY &&
      itemId === router.query.categoryId
    )
      return true;
    if (
      filterType == FilterTypes.INDUSTRY &&
      itemId === router.query.industryId
    )
      return true;
    return false;
  };

  return { getLinkPath, isItemSelected };
};

export default useSearchId;
