import { NextPage } from 'next';
import WorkList from './component/WorkList';
import ImageCard from './component/ImageCard';
import SearchBox from './component/SearchBox';
import ClientList from './component/ClientList';
import { headerCard } from './lib/constants';

const Work: NextPage = () => {
  return (
    <div className="w-100">
      <ImageCard cardItem={headerCard} />
      <SearchBox />
      <WorkList />
      <ClientList />
    </div>
  );
};

export default Work;
