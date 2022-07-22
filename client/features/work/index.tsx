import { NextPage } from 'next';
import WorkList from './component/WorkList';
import ImageCard from './component/ImageCard';
import ClientList from './component/ClientList';
import { headerCard } from './lib/constants';

const Work: NextPage = () => {
  return (
    <div className="w-100">
      <ImageCard cardItem={headerCard} />
      <WorkList />
      <ClientList />
    </div>
  );
};

export default Work;
