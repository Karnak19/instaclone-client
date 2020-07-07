import React, { useState, useEffect } from 'react';
import { Row, Spinner } from 'reactstrap';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import FeedPost from './FeedPost';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = useSelector((state) => state.token);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await Axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/v1/posts`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(data);
      } catch (error) {
        // TODO: handle error
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);
  if (isLoading) {
    return (
      <Row>
        <Spinner />
      </Row>
    );
  }
  return (
    <Row>
      {posts.map((p) => {
        return (
          <FeedPost
            key={p.id}
            id={p.id}
            username={p.username}
            image={p.image}
            desc={p.desc}
          />
        );
      })}
    </Row>
  );
}

export default Feed;
