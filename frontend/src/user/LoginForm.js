import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = ({ loggedIn }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });
  const [exUser, setExUser] = useState(true);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log({ formData });
    // handle(search);
  }

  return (
    <div className='col-md-8 offset-md-2'>
      <Button onClick={() => setExUser(true)} variant='primary'>Login</Button>
      <Button onClick={() => setExUser(false)} variant='primary'>Sign up</Button>
      <Form onSubmit={handleSubmit}>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={handleChange} value={formData.username} name="username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={handleChange} value={formData.password} name="password" />
        </Form.Group>
        {
          exUser ? null :
            <div>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control onChange={handleChange} value={formData.firstName} name="firstName" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={handleChange} value={formData.lastName} name="lastName" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleChange} value={formData.email} name="email" />
              </Form.Group>
            </div>
        }
        <Button variant="primary" type="submit">
          Submit 
  </Button>
      </Form>
    </div>
  );
}

export default LoginForm;