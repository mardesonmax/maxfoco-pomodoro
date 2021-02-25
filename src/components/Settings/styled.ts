import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px;
  .settings {
    background: ${(props) => props.theme.background};
    border-radius: 6px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;

    h2 {
      flex: 100%;
      text-align: center;
      color: ${(props) => props.theme.text};
      padding: 10px 0;
    }

    .items {
      display: flex;
      flex-wrap: wrap;

      label {
        display: flex;
        flex-direction: column;
        margin: 10px;
        flex: 1;

        p {
          color: ${(props) => props.theme.primary};
        }

        input {
          margin-top: 5px;
          padding: 10px;
          border-radius: 6px;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
      }
    }
    .concluir {
      padding: 20px 0;
      display: flex;
      flex: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;
