import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFetchIndustriesQuery, useFetchCategoriesQuery } from '../workSlice';
import { allIndustries, allCategories } from '../lib/constants';
import { FilterTypes } from '../interfaces';

const useSearchBox = () => {
  const industriesQuery = useFetchIndustriesQuery();
  const industriesData = [allIndustries, ...(industriesQuery?.data ?? [])];
  const categoriesQuery = useFetchCategoriesQuery();
  const categoriesData = [allCategories, ...(categoriesQuery?.data ?? [])];

  const router = useRouter();

  const categoryId = router.query.categoryId;
  const industryId = router.query.industryId;

  const [filterType, setFilterType] = useState<string>(FilterTypes.CATEGORY);
  const [isFliterListOpen, setIsFliterListOpen] = useState(false);

  const getSelectedIndustry = () =>
    industriesData.find((item) => item.id === industryId) ?? industriesData[0];

  const getSelectedCategory = () =>
    categoriesData.find((item) => item.id === categoryId) ?? categoriesData[0];

  const toggleFilterCollapse = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const target = event.target as Element;
    if (filterType === target.id && isFliterListOpen)
      return setIsFliterListOpen(false);

    setFilterType(target.id);
    setIsFliterListOpen(true);
  };

  return {
    getSelectedIndustry,
    getSelectedCategory,
    isFliterListOpen,
    filterType,
    toggleFilterCollapse,
    categoriesData,
    industriesData,
  };
};

export default useSearchBox;
