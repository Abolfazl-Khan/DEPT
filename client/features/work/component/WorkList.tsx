import { NextPage } from 'next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    </Row>
  );
};

export default WorkList;
