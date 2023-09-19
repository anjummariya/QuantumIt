import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faHeart, faThumbsUp, faSmile } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const iconStyle = {
  fontSize: '30px',
  color: 'black',
};

const textStyle = {
  textAlign: 'center',
  color: 'black',
};

const Experience = () => {
  return (
    <section className="main-section no-bg mt-5">
      <Container style={{ margin: '0px 15%' }}>
        <Row>
          <Col xs={12} lg={6} className='text-center'>
            <div className="content text-center">
              <h1>We have many years of experience in consultant business</h1>
              <p className="grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur non, aliquid optio nisi alias
                voluptatum, consequatur ea quasi atque vel, quas eligendi.
              </p>
              <button className="button2">Know more</button>
            </div>
           
          </Col>
          <Col>
            <div className='image'></div>
          </Col>
        </Row>
        <Row className="text-center mt-5">
              <Col xs={3}>
                <FontAwesomeIcon icon={faAddressCard} style={iconStyle} />
                <p style={textStyle}>Give</p>
              </Col>
              <Col xs={3}>
                <FontAwesomeIcon icon={faHeart} style={iconStyle} />
                <p style={textStyle}>Me</p>
              </Col>
              <Col xs={3}>
                <FontAwesomeIcon icon={faThumbsUp} style={iconStyle} />
                <p style={textStyle}>A</p>
              </Col>
              <Col xs={3}>
                <FontAwesomeIcon icon={faSmile} style={iconStyle} />
                <p style={textStyle}>Smile</p>
              </Col>
            </Row>
      </Container>
    </section>
  );
};

export default Experience;
