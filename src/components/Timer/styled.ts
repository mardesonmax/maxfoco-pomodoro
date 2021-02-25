import styled from 'styled-components';

export const Display = styled.div`
  h1 {
    color: ${(props) => props.theme.text};
    text-align: center;
    font-size: 5em;
    padding: 20px 0;
  }
`;

export const Pomodoro = styled.section`
  padding: 20px;

  .item {
    background: ${(props) => props.theme.background};
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  .menu {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    button {
      margin: 5px;
      flex: 1;
      min-width: 120px;

      &.active {
        background: ${(props) => props.theme.text};
        color: ${(props) => props.theme.background};
      }
    }
  }

  .controllers {
    display: flex;
    justify-content: center;

    button {
      margin: 0 5px;
    }
  }

  .info {
    padding: 5px;
    color: ${(props) => props.theme.text};
    p {
      text-align: center;
      margin-top: 10px;
    }
  }
`;
