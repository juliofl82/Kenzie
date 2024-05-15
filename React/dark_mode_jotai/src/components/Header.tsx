
import React from 'react';
import { useSetAtom } from 'jotai';
import { darkModeAtom } from '../atoms/darkModeAtom';

const Header: React.FC = () => {
  const setDarkMode = useSetAtom(darkModeAtom);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <header>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
    </header>
  );
};

export default Header;



