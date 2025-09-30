import React from 'react';
import { NavLink } from 'react-router-dom'; // ✅ Tambahkan ini

const Navbar = ({ containerStyles, setMenuOpened }) => {
  const navLinks = [
    { path: '/', title: 'Home' },
    { path: '/menu', title: 'Menu' },
    { path: '/blog', title: 'Blog' },
    { path: '/contact', title: 'Contact' },
  ];

  return (
    <nav className={containerStyles}>
      <ul className="hidden md:flex gap-x-5 xl:gap-x-10">
        {navLinks.map((link) => (
          <li key={link.title}>
            <NavLink
              to={link.path}
              onClick={() => setMenuOpened(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-full uppercase text-sm font-bold ${isActive ? 'active-link' : ''
                }`
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
