import { NextPage } from 'next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ImageCard from './ImageCard';
import useWorkList from '../hook/useWorkList';

const WorkList: NextPage = () => {
  const { workData } = useWorkList();

  return (
    <Row>
      {workData
        .filter((item) => !!item.image)
        .map((workItem) => (
          <Col key={workItem.image} md="6" className="p-0">
            <ImageCard cardItem={workItem} />
          </Col>
        ))}
      {!workData.length && (
        <Alert variant="dark" className="w-75 mx-auto my-3 text-center">
          No Result!
        </Alert>
      )}
    </Row>
  );
};

export default WorkList;
