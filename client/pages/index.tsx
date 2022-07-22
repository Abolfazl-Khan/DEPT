import type { NextPage } from 'next';
import AppLayout from 'features/layout/AppLayout';
import Work from 'features/work';
import ClientQuestionForm from 'features/clientQuestionForm';

const Home: NextPage = () => {
  return (
    <AppLayout pageTitle="Work">
      <Work />
      <ClientQuestionForm />
    </AppLayout>
  );
};

export default Home;
