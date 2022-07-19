import type { NextPage } from 'next';
import AppLayout from '../features/layout/AppLayout';
import Work from 'features/work';

const Home: NextPage = () => {
  return (
    <AppLayout pageTitle="Work">
      <Work />
    </AppLayout>
  );
};

export default Home;
