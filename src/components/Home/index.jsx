import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import Feed from './Feed';

function Home() {
  const isAuth = useSelector((state) => state.isAuth);

  if (isAuth) {
    return <Feed />;
  }

  if (!isAuth) {
    return <Login />;
  }
}

export default Home;
