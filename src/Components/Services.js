import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css";


const heading={
    paddingTop:'50px',
    fontSize:'1.5rem',
    fontWeight:'900',
}
const servicesContent={
    width:'auto',
    margin:'40px',
}
const services = [
  {
    title: 'Financial Consulting',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, nisi a ullamcorper consectetur.',
  },
  {
    title: 'Content Marketing',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, nisi a ullamcorper consectetur.',
  },
  {
    title: 'Finance Advice',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, nisi a ullamcorper consectetur.',
  },
];

const Services = () => {
  return (
    <section className="text-center servicesbg">
      <h1 style={heading}>Our Services</h1>
   
      <p style={servicesContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, nisi a ullamcorper 
      </p>
    
     
      <Row className="boxes">
        {services.map((service, index) => (
          <Col key={index}  md={4} className="box">
            <h2 style={heading}>{service.title}</h2>
            <p>{service.content}</p>
          </Col>
        ))}
      </Row>
      <button className=' mt-5 mb-5'>All Services</button>
    </section>
  );
};

export default Services;
