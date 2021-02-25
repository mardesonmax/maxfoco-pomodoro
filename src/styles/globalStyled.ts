import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.primary};
    width: 100%;
    height: 100%;
    transition: 0.3s ease all;
    font-family: Arial, Helvetica, sans-serif
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
