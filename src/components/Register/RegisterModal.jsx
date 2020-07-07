import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from 'reactstrap';
import Axios from 'axios';
import RegisterForm from './RegisterForm';

function RegisterModal({ isOpen, toggle }) {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await Axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
        values
      );
      // TODO: add react-toastify here
      toggle();
    } catch (error) {
      //
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle} />
      <ModalBody>
        <RegisterForm
          handleSubmit={handleSubmit}
          values={values}
          handleChange={handleChange}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="success" form="registerForm" disabled={isLoading}>
          {isLoading ? <Spinner size="sm" /> : 'Register'}
        </Button>
        <Button color="primary">Reset</Button>
      </ModalFooter>
    </Modal>
  );
}

RegisterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default RegisterModal;
