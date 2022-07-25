import { useRouter } from 'next/router';
import { useFetchPortfoliosQuery } from '../workSlice';

const useWorkList = () => {
  const router = useRouter();
  const categoryId = router.query.categoryId;
  const industryId = router.query.industryId;

  const { data = [] } = useFetchPortfoliosQuery({
    categoryId,
    industryId,
  });

  return { workData: data };
};

export default useWorkList;
