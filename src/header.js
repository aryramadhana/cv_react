import React from 'react';
import { NavLink,  Link } from 'react-router-dom';

const Header = () => {
  const listMenu = ['Home', 'Experience','Education','Skills', 'Interest','Game'];
  
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <NavLink to={`/${name}`} key={name} className="menu" activeClassName="active_link">
            <div>{name}</div>
          </NavLink>
        );
      })}
    </div>
  );
};
export default Header;