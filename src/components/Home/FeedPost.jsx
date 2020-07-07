import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {
  CardHeader,
  Card,
  Col,
  CardBody,
  CardImg,
  Spinner,
  CardText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function FeedPost({ id, username, image, desc }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await Axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/${username}`
        );
        setUser(data);
      } catch (error) {
        // TODO: handle error
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <Col
      xs={{ offset: 0, size: 12 }}
      md={{ offset: 1, size: 10 }}
      lg={{ offset: 3, size: 6 }}
      className="my-2"
    >
      <Card>
        <CardHeader style={{ padding: '0.5rem 1rem' }}>
          <img
            src={user.avatar}
            style={{ height: 30 }}
            alt={user.username}
            className="mr-2"
          />
          <Link to={`/${user.username}`}>
            <b>{user.username}</b>
          </Link>
        </CardHeader>
        {isLoading ? (
          <Spinner />
        ) : (
          <CardImg
            width="100%"
            src={image}
            style={{
              width: '100%',
              height: '56vh',
              objectFit: 'cover',
              borderRadius: 0,
            }}
          />
        )}
        <CardBody>
          <CardText>{desc}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

FeedPost.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default FeedPost;
