import { NextPage } from 'next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFetchPortfolioQuery } from '../workSlice';
import ImageCard from './ImageCard';

const WorkList: NextPage = () => {
  const { data = [] } = useFetchPortfolioQuery();

  return (
    <Row>
      {data
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
