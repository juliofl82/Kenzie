import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ isDarkMode: boolean }>`
  body {
    background-color: ${props => props.isDarkMode ? '#333' : '#FFF'};
    color: ${props => props.isDarkMode ? '#FFF' : '#333'};
    transition: all 0.25s linear;
  }
`;
