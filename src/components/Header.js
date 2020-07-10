import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Header = (props) => {
  return (
    <Navbar bg="primary" variant="dark">
      <span className='link'>
        <NavLink to='/'>Главная</NavLink>
      </span>
      <span className='link'>
        <NavLink to='/catalog'>Каталог</NavLink>
      </span>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          ЭТМ: тестовое задание
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
