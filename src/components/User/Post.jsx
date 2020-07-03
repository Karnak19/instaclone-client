import React, { useState, useEffect } from 'react';
import { Col, Modal, Row } from 'reactstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Post({ id, desc, image, userId }) {
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await Axios(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/${userId}`
      );
      setUser(data);
    };
    getUser();
  }, [isOpen]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Col xs={4} className="px-xs-0 p-sm-2">
      <img
        src={image}
        className="img-fluid"
        alt=""
        onClick={toggle}
        style={{ cursor: 'pointer' }}
      />
      <Modal size="lg" centered isOpen={isOpen} toggle={toggle}>
        <Row>
          <Col xs={7}>
            <img src={image} className="img-fluid" alt="" onClick={toggle} />
          </Col>
          <Col xs={5}>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xs={2}>
                    <img
                      src={user.avatar}
                      alt={user.email}
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <Link to={`/${user.id}`}>{user.email}</Link>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>{desc}</Col>
              <Col xs={12}>post comment</Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </Col>
  );
}

export default Post;
