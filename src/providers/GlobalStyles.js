import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  div {
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  .section-header {
    color: ${({ theme }) => theme.text};
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    text-transform: capitalize;
  }
`;
