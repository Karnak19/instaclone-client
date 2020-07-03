import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Post from './Post';

function Content() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getDatas = async () => {
      try {
        const { data } = await Axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/${id}/posts`
        );

        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getDatas();
  }, []);

  return (
    <Row>
      {posts.map((post) => {
        return (
          <Post
            desc={post.desc}
            image={post.image}
            id={post.id}
            key={post.id}
            userId={post.userId}
          />
        );
      })}
    </Row>
  );
}

export default Content;
