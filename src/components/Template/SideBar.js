import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/Teemu.jpg`} alt="" />
      </Link>
      <header>
        <h2>Teemu Näsänen</h2>
        <p><a href="mailto:teemu.nasanen@gmail.com">teemu.nasanen@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Hello,</h2>
      <p>I&apos;m Teemu.
        I am a third year Business Information Technology student from <a href="https://www.laurea.fi/en/">Laurea</a>. I live in Helsinki with my family (wife + 2 kids). Before studying, I have worked as a warehouse worker for 15+ years. The goal is to switch to the IT industry.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Teemu Näsänen 2021 <Link to="/">teemunasanen.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
