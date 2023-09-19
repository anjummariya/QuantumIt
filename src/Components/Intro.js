import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';

const Intro = () => {
  return (
    <section className="main-section">
      <Container>
        <div className="content d-flex justify-content-start align-items-start">
          <h4>Hi, My name is Mariya!</h4>
          <h1>We are Consulting for your business finances</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            vehicula lectus, at luctus ipsum. 
          </p>
          <button>start now</button>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
