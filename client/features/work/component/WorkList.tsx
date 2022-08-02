import { NextPage } from 'next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ImageCard from './ImageCard';
import TextCard from './TextCard';
import useWorkList from '../hook/useWorkList';
import { CardTypes } from '../interfaces';

const WorkList: NextPage = () => {
  const { cardData } = useWorkList();

  return (
    <Row>
      {cardData.map((cardItem, cardIndex) => (
        <Col
          key={`work_card_item_${cardIndex}`}
          md={cardItem.col}
          className='p-0'
        >
          {cardItem.type === CardTypes.IMAGE_CARD ? (
            <ImageCard cardItem={cardItem.data[0]} />
          ) : (
            <TextCard cardItems={cardItem.data} />
          )}
        </Col>
      ))}
      {!cardData.length && (
        <Alert variant='dark' className='w-75 mx-auto my-3 text-center'>
          No Result!
        </Alert>
      )}
    </Row>
  );
};

export default WorkList;
