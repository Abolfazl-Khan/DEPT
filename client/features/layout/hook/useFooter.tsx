import { useState } from 'react';
const useFooter = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [isFooterHovered, setIsFooterHovered] = useState(false);

  const toggleIsFooterHovered = () => setIsFooterHovered((prev) => !prev);
  const scrollToTop = () => window.scrollTo(0, 0);

  return { isFooterHovered, toggleIsFooterHovered, currentYear, scrollToTop };
};

export default useFooter;
