import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';

import Navigation from './Navigation';

function Layout({ children }) {
  const isAuth = useSelector((state) => state.isAuth);
  return (
    <>
      {isAuth && <Navigation />}
      <Container style={{ marginTop: 70 }}>{children}</Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
