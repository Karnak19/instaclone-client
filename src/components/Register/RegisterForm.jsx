import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Label } from 'reactstrap';

function RegisterForm({ handleSubmit, values, handleChange }) {
  return (
    <Form onSubmit={handleSubmit} id="registerForm">
      <FormGroup>
        <Label>Username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          value={values.username}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Firstname</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Lastname</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          valid={
            values.password.length >= 8 &&
            values.password === values.confirmPassword
          }
          invalid={values.password !== values.confirmPassword}
        />
      </FormGroup>
      <FormGroup>
        <Label>Confirm Password</Label>
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          valid={
            values.password.length >= 8 &&
            values.password === values.confirmPassword
          }
          invalid={values.password !== values.confirmPassword}
        />
      </FormGroup>
    </Form>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    username: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RegisterForm;
