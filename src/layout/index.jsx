import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Navigation from './Navigation';

function Layout({ children }) {
  const isAuth = useSelector((state) => state.isAuth);
  return (
    <>
      {isAuth && <Navigation />}
      <Container style={{ marginTop: 70 }}>{children}</Container>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover={false}
      />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
