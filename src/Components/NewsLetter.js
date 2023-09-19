import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import './App.css';

const heading={
    marginTop:'50px',
    color:'white',
    fontFamily:'Sans-serif',
    fontSize:'1.7rem',
    fontWeight:'700',
}
const email={
    padding:'10px 20px',
    width:'100%',
    borderRadius:'4px',
    border: '3px solid #0da1f7',
    backgroundColor:'transparent',
}

const NewsLetter=()=>{
    return(
            <Row className="newsletterBg mb-3">
                <Col lg={4} md={4} sm={4}>
                <div style={heading} className="textCenter">Subscribe our Newsletter for more updates</div>   
                <p  className="textCenter" style={{color:'white', fontSize:'1rem', marginTop:'10px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus rerum quae sed corporis porro quam.</p>
                </Col>
                <Col lg={3} md={4} sm={4} className="m-4">
                <form>
                    <input type="email" placeholder="Enter your Mail" name="email" style={email} className="textStyle"></input>
                    <br></br>
                    <div className="center">
                        <button className="mt-4 subscribe">Subscribe</button>
                    </div>
                    </form>
                    </Col>
            </Row>
    );
};

export default NewsLetter;