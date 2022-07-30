import { NextPage } from 'next';
import Image from 'next/image';
import { Work } from '../interfaces';
import styles from '../styles/ImageCard.module.scss';

interface ImageCardProps {
  cardItem: Work;
  priority?: boolean;
}

const ImageCard: NextPage<ImageCardProps> = (props) => {
  const { cardItem, priority } = props;
  const isHeaderCard = cardItem.id == 'HeaderCard';
  const src = `${isHeaderCard ? '' : process.env.NEXT_PUBLIC_BASE_URL}/${
    cardItem.image
  }`;

  return (
    <div className={`${styles.container} ${isHeaderCard && styles.headerCard}`}>
      <Image
        loader={({ src, width }) => {
          return `${src}?$w=${width}`;
        }}
        src={src}
        alt={cardItem.companyName}
        title={cardItem.companyName}
        priority={priority}
        layout="fill"
        objectFit="cover"
      />
      <div
        className={`${styles.textBlock} ${!isHeaderCard && styles.animative}`}
      >
        <p className={styles.text}>{cardItem.companyName}</p>
        <p className={styles.titleText}>{cardItem.title}</p>
        <p className={`${styles.text} d-${isHeaderCard ? 'none' : 'block'}`}>
          <img src="/icons/focus.png" height={12} className="pe-2" /> Read more
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
