import { useRouter } from 'next/router';
import { NavListProps } from '../interfaces';

const useNavList = (props: NavListProps) => {
  const { isBriefList } = props;
  const router = useRouter();

  const isArrowVisible = (title: string) => {
    if (isBriefList) return false;
    if (router.asPath.includes(title)) return true;
    if (router.asPath == '/' && title == 'HOME') return true;
    return false;
  };

  return { isArrowVisible };
};

export default useNavList;
