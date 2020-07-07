import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  Spinner,
  InputGroupAddon,
  InputGroup,
} from 'reactstrap';
import Axios from 'axios';
import { useDispatch } from 'react-redux';

import { LOGIN } from '../../store/actions';

function LoginForm() {
  const [datas, setDatas] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
    setIsError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await Axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        datas
      );
      setLoginSuccess(true);
      dispatch({ type: LOGIN, payload: data });
    } catch (error) {
      setIsError(true);
      setErrors(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          invalid={isError}
          onChange={handleChange}
          value={datas.email}
          name="email"
          id="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <InputGroup>
          <Input
            type={!showPassword ? 'password' : 'text'}
            invalid={isError}
            onChange={handleChange}
            value={datas.password}
            name="password"
            id="password"
          />
          <InputGroupAddon addonType="append">
            <Button color="info" onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? 'Show' : 'Hide'}
            </Button>
          </InputGroupAddon>
          {errors && <FormFeedback>{errors.message}</FormFeedback>}
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Button
          block
          color={loginSuccess ? 'success' : 'info'}
          disabled={isLoading}
        >
          {isLoading ? <Spinner size="sm" className="ml-3" /> : 'Connexion'}
        </Button>
      </FormGroup>
    </Form>
  );
}

export default LoginForm;
