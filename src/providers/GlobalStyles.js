import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    height: 5500px;
    overflow-x: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  div {
    box-sizing: border-box;
    transition: all 0.3s ease;
  }
`;
