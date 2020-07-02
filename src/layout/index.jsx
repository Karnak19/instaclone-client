import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Container style={{ marginTop: 70 }}>{children}</Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
