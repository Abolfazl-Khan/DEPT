import { useState } from 'react';
const useTopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleIsMenuOpen = () => setIsMenuOpen((prev) => !prev);

  return { isMenuOpen, toggleIsMenuOpen };
};

export default useTopNav;
