import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '../../styles/globalStyled';
import { Menu } from './styled';

const Header: React.FC = () => {
  return (
    <Menu>
      <Container>
        <nav>
          <div className="logo">
            <Link to="/">MAXFOCO</Link>
          </div>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>

              <NavLink to="/settings" exact>
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </Menu>
  );
};

export default Header;
