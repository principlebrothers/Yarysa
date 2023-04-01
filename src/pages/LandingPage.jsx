import React from 'react';
import Container from '../components/container/Container';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/Navbar';
import Main from '../components/main/Main';

function LandingPage() {
  return (
    <Container>
      <Navbar />
      <Main />
      <Footer />
    </Container>
  );
}

export default LandingPage;
