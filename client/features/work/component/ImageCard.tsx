import { NextPage } from 'next';
import { Work } from '../interfaces';
import styles from '../styles/ImageCard.module.scss';

const ImageCard: NextPage<{ cardItem: Work }> = (props) => {
  const { cardItem } = props;
  const isHeaderCard = cardItem.id == 'HeaderCard';

  return (
    <div
      style={{
        backgroundImage: `url(${
          isHeaderCard ? '' : process.env.NEXT_PUBLIC_BASE_URL
        }/${cardItem.image})`,
        height: isHeaderCard ? '88vh' : '100vh',
      }}
      className={`${styles.container} ${!isHeaderCard && styles.animative}`}
    >
      <p className={styles.text}>{cardItem.companyName}</p>
      <p className={styles.titleText}>{cardItem.title}</p>
      <p className={`${styles.text} d-${isHeaderCard ? 'none' : 'block'}`}>
        <img src='/icons/focus.png' height={12} className='pe-2' /> Read more
      </p>
    </div>
  );
};

export default ImageCard;
