import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFetchPortfoliosQuery } from '../workSlice';
import { Card, CardTypes } from '../interfaces';

const useWorkList = () => {
  const router = useRouter();
  const categoryId = router.query.categoryId;
  const industryId = router.query.industryId;

  const { data = [] } = useFetchPortfoliosQuery({
    categoryId,
    industryId,
  });

  const [cardData, setCardData] = useState<Card[]>([]);

  useEffect(() => {
    if (!data.length) return;

    let newCardData = data
      .filter((item) => !!item.image)
      .map((item) => ({
        col: 6,
        type: CardTypes.IMAGE_CARD,
        data: [item],
      }));

    const textData = data.filter((item) => !item.image);

    if (!textData.length) return setCardData(newCardData);

    let textCardData: Card[] = [];
    for (let i = 0; i < textData.length; i += 3) {
      textCardData = [
        ...textCardData,
        {
          col: 4,
          type: CardTypes.TEXT_CARD,
          data: textData.slice(i, i + 3),
        },
      ];
    }

    const step = Math.ceil(
      (newCardData.length || 1) / (textCardData.length + 1)
    );

    textCardData.map((item, index) => {
      const textCardIndex = (index + 1) * step;
      newCardData.splice(textCardIndex, 0, item);
      newCardData[
        textCardIndex % 2 === 0 ? textCardIndex + 1 : textCardIndex - 1
      ].col = 8;
    });

    setCardData(newCardData);
  }, [data]);

  return { cardData };
};

export default useWorkList;
