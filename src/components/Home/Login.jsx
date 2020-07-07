import React from 'react';
import { Row, Col } from 'reactstrap';

import Register from '../Register';
import LoginForm from './LoginForm';

function Login() {
  return (
    <Row>
      <Col
        lg={{ size: 4, offset: 2 }}
        md={{ size: 6 }}
        className="d-none d-md-block"
      >
        <img
          src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
          className="img-fluid"
          alt=""
        />
      </Col>
      <Col
        xs={{ size: 10, offset: 1 }}
        md={{ size: 6, offset: 0 }}
        lg={{ size: 4, offset: 0 }}
      >
        <Col xs={12} className="p-5" style={{ border: '1px solid grey' }}>
          <h1 className="text-center mb-4" style={{ fontSize: 28 }}>
            INSTACLONE
          </h1>
          <LoginForm />
        </Col>
        <Col
          className="p-3 mt-2 text-center"
          style={{ border: '1px solid grey' }}
        >
          <Register />
        </Col>
      </Col>
    </Row>
  );
}

export default Login;
