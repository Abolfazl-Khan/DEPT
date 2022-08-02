import { NextPage } from 'next';
import { Work } from '../interfaces';
import styles from '../styles/TextCard.module.scss';

interface TextCardProps {
  cardItems: Work[];
}

const TextCard: NextPage<TextCardProps> = (props) => {
  const { cardItems } = props;

  return (
    <div className={styles.container}>
      {cardItems.map((cardItem, cardIndex) => (
        <div className={styles.textBlock}>
          <p className={styles.text}>{cardItem.companyName}</p>
          <p className={styles.text}>{cardItem.title}</p>
          <p className={styles.text}>
            <img src='/icons/focus.png' height={12} className='pe-2' /> Read
            more
          </p>
          {cardIndex + 1 < cardItems.length && (
            <div className={styles.divider} />
          )}
        </div>
      ))}
    </div>
  );
};

export default TextCard;
