// src/App.tsx
import React from 'react';
import { useAtom } from 'jotai';
import { darkModeAtom } from './atoms/darkModeAtom';
import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header';

const App: React.FC = () => {
  const [isDarkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Header />
      <main>
        <p>Main content here</p>
      </main>
    </>
  );
};

export default App;



