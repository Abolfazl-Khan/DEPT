import { useState } from 'react';
const useFooter = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [isFooterHovered, setIsFooterHovered] = useState(false);

  const toggleIsFooterHovered = () => setIsFooterHovered((prev) => !prev);

  return { isFooterHovered, toggleIsFooterHovered, currentYear };
};

export default useFooter;
