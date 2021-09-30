import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Teemu Näsänen's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome</Link></h2>
          <p> This is my personal website. Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/projects">projects</Link> {' '}
            or <Link to="/contact">contact</Link> me.
          </p>
          <p> Source available <a href="https://github.com/teemunasanen/personal-site">here</a>.</p>
        </div>
      </header>
      <h3>About this site</h3>
      <figure>
        <em>
          A beautiful, responsive, statically-generated,
          react application written with modern Javascript.
        </em>
        <figcaption>
          <a href="https://mldangelo.com/">- Michael D&apos;Angelo</a>
        </figcaption>
      </figure>
      <div>
        <p>
          I decided to build my own website and came across to an open source project of personal
          website by Michael D’Angelo that looked very good and was pretty close to my own goal.
          The project provided a suitable challenge and an opportunity to learn.
          I am very pleased with the outcome and will continue to develop my personal site.
        </p>
      </div>
    </article>
  </Main>
);

export default Index;
