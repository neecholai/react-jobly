import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';
import JoblyApi from "../helpers/JoblyApi";
import UserContext from './UserContext';
import './LoginForm.css';

const LoginForm = () => {
  const { user, login } = useContext(UserContext);

  const history = useHistory();
  if (user.loggedIn) history.push('/');

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });
  const [exUser, setExUser] = useState(true);
  const [errMsg, setErrMsg] = useState(false);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async evt => {
    evt.preventDefault();
    const endpoint = exUser ? "login" : "users";
    const resp = await JoblyApi.getToken(formData, endpoint);
    resp.error ? setErrMsg(resp.error) : login();
  }

  return (
    <div className='col-md-8 offset-md-2'>
      <div className='d-flex justify-content-end'>
        <ButtonGroup>
          <Button className='LoginForm-loginBtn' active={exUser} onClick={() => setExUser(true)} variant='primary'>Login</Button>
          <Button className='LoginForm-registerBtn' active={!exUser} onClick={() => setExUser(false)} variant='primary'>Sign up</Button>
        </ButtonGroup>
      </div>

      <Form className='border p-4' onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className='LoginForm-label'>Username</Form.Label>
          <Form.Control onChange={handleChange} value={formData.username} name="username" />
        </Form.Group>

        <Form.Group>
          <Form.Label className='LoginForm-label'>Password</Form.Label>
          <Form.Control type="password" onChange={handleChange} value={formData.password} name="password" />
        </Form.Group>
        {
          exUser ? null :
            <div>
              <Form.Group>
                <Form.Label className='LoginForm-label'>First Name</Form.Label>
                <Form.Control onChange={handleChange} value={formData.firstName} name="firstName" />
              </Form.Group>

              <Form.Group>
                <Form.Label className='LoginForm-label'>Last Name</Form.Label>
                <Form.Control onChange={handleChange} value={formData.lastName} name="lastName" />
              </Form.Group>

              <Form.Group>
                <Form.Label className='LoginForm-label'>Email</Form.Label>
                <Form.Control onChange={handleChange} value={formData.email} name="email" />
              </Form.Group>
            </div>
        }
        {
          errMsg ?
            errMsg.map(msg => <Alert variant="danger">{msg}</Alert>) :
            null
        }
        <div className='d-flex justify-content-end'>
          <Button variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;