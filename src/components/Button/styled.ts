import styled from 'styled-components';

export const MyButton = styled.button`
  padding: 10px 15px;
  font-size: 1em;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
  transition: 0.3s ease all;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;
