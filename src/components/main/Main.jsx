import React from 'react';
import About from './about/About';
import Blog from './blog/Blog';
import Intro from './Intro/Intro';
import Portfolio from './porfolio/Portfolio';

function Main() {
  return (
    <main>
      <Intro />
      <Portfolio />
      <Blog />
      <About />
    </main>
  );
}

export default Main;
