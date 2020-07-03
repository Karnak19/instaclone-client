import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function Header() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getDatas = async () => {
      try {
        const { data } = await Axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/${id}`
        );

        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    getDatas();
  }, []);
  return (
    <Row>
      <Col xs={{ size: 3, offset: 2 }}>
        <img
          className="img-fluid rounded-circle"
          style={{ border: '2px gray solid' }}
          src={user.avatar}
          alt={user.email}
        />
      </Col>
      <Col>
        <Row>
          <Col xs={12}>
            <h1 style={{ fontSize: 28 }}>{user.email}</h1>
          </Col>
          <Col>
            <h2
              style={{ fontSize: 16 }}
            >{`${user.firstName} ${user.lastName}`}</h2>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
