import { NextPage } from 'next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFetchClientsQuery } from '../workSlice';
import styles from '../styles/ClientList.module.scss';
const ClientList: NextPage = () => {
  const { data = [] } = useFetchClientsQuery();

  return (
    <div className={styles.container}>
      <p className={styles.titleText}>Clients:</p>
      <p className={styles.text}>
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </p>
      <Row className="mx-md-5">
        {data.map((client) => (
          <Col key={client.logo} xs="6" md="4" className="text-center mt-3 p-0">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/${client.logo}`}
              alt={client.title}
              className={styles.logo}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ClientList;
