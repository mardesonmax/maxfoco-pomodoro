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
      width: 100%;
      flex-wrap: wrap;

      label {
        display: flex;
        flex-direction: column;
        margin: 10px;
        min-width: 160px;
        flex: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        padding: 10px;
        border-radius: 6px;
        p {
          color: ${(props) => props.theme.primary};
          text-align: center;
        }

        small {
          width: 100%;
          text-align: center;
          padding: 5px 0;
          color: ${(props) => props.theme.text};
        }

        input[type='range'] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 25px;
          border-radius: 500px;
          background: ${(props) => props.theme.primary};
          outline: none;
          overflow: hidden;

          &:hover {
            opacity: 1;
          }

          &::-webkit-slider-thumb {
            all: unset; /* limpa os estilos iniciais */
            -webkit-appearance: none; /* remove a aparencia padão */
            border: none;
            width: 25px;
            height: 25px;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            cursor: pointer;
          }
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
