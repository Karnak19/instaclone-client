import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, Modal, Row } from 'reactstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Post({ id, desc, image, username }) {
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/${username}`
      );
      setUser(data);
    };

    if (user && isOpen === true) getUser();
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
          {/* TODO: Move the following to a new component */}
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
                    <Link to={`/${user.username}`}>{user.email}</Link>
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

Post.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Post;
