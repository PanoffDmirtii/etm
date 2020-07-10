import React from 'react';
import { Navbar } from 'react-bootstrap'

export const Header = (props) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Главная</Navbar.Brand>
      <Navbar.Brand href="/catalog">Каталог</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          ЭТМ: тестовое задание
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
