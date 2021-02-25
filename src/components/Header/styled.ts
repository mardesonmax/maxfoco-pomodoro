import styled from 'styled-components';

export const Menu = styled.header`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 0 20px;

  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 50px;

    .logo {
      font-weight: bold;
      font-size: 1.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        flex: 1;
        text-decoration: none;
        color: #fff;
      }
    }

    ul {
      list-style: none;
      display: flex;
      li {
        display: flex;
        height: 100%;
        justify-content: center;

        a {
          font-size: 1em;
          padding: 0 10px;
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #fff;
          transition: 0.3s ease all;

          &:hover {
            background: ${(props) => props.theme.text};
          }

          &.active {
            background: ${(props) => props.theme.text};
            opacity: 0.8;
          }
        }
      }
    }
  }
`;
