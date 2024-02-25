import React from 'react';
import Navbar from './Navbar.js';
import HomepageSection1 from './HomepageSection1.js';
import HomepageSection2 from './HomepageSection2.js';
import HomepageSection3 from './HomePageSection3.js';
import Footer from './Footer.js';


function Homepage() {
  return (
    <div>
      <Navbar />
      <HomepageSection1 />
      <HomepageSection2 />
      <HomepageSection3 />
      <Footer />
    </div>
  );
}

export default Homepage;