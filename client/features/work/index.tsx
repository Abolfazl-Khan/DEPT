import { NextPage } from 'next';
// import { Image } from 'react-bootstrap';
import { useFetchClientsQuery } from './workSlice';

const About: NextPage = () => {
  const { data = [], isFetching } = useFetchClientsQuery();
  console.log(process.env.NEXT_PUBLIC_BASE_URL);

  return (
    <div>
      <h1>Clients:</h1>
      {isFetching ? (
        <h2>loading</h2>
      ) : (
        data.map((client) => (
          <img
            key={client.logo}
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${client.logo}`}
            alt={client.title}
            style={{ backgroundColor: 'black' }}
            height={150}
          />
        ))
      )}
      <p></p>
    </div>
  );
};

export default About;
