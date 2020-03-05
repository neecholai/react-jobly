import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import JoblyApi from "../helpers/JoblyApi";
import UserContext from './UserContext';
import './ProfileForm.css'
import defaultUserImg from "../assets/default-user-img.png";

const ProfileForm = () => {

  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    photoURL: "",
    password: ""
  });
  const [errMsg, setErrMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const userResp = await JoblyApi.getUser(user.username);
      if (userResp.photo_url === defaultUserImg) userResp.photo_url = "";
      setFormData({
        firstName: userResp.first_name || "",
        lastName: userResp.last_name || "",
        email: userResp.email || "",
        photoURL: userResp.photo_url || "",
        password: ""
      })
    }
    getUser();
  }, [])

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async evt => {
    evt.preventDefault();
    const resp = await JoblyApi.patchUser(user.username, formData);

    if (resp.error) {
      setErrMsg(resp.error);
    } else {
      setFormData(oldFormData => ({
        ...oldFormData,
        password: ''
      }));
      setErrMsg(false);
      setSuccessMsg(true);
    }
  }

  return (
    <div className='col-md-6 offset-md-3'>
      <Form className='border p-4' onSubmit={handleSubmit}>

        <div className='ProfileForm-label pb-2'>Username</div>
        <p className='d-flex justify-content-start'>{user.username}</p>

        <Form.Group>
          <Form.Label className='ProfileForm-label'>First Name</Form.Label>
          <Form.Control onChange={handleChange} value={formData.firstName} name="firstName" />
        </Form.Group>

        <Form.Group>
          <Form.Label className='ProfileForm-label'>Last Name</Form.Label>
          <Form.Control onChange={handleChange} value={formData.lastName} name="lastName" />
        </Form.Group>

        <Form.Group>
          <Form.Label className='ProfileForm-label'>Email</Form.Label>
          <Form.Control onChange={handleChange} value={formData.email} name="email" />
        </Form.Group>

        <Form.Group>
          <Form.Label className='ProfileForm-label'>Photo URL</Form.Label>
          <Form.Control onChange={handleChange} value={formData.photoURL} name="photoURL" />
        </Form.Group>

        <Form.Group>
          <Form.Label className='ProfileForm-label'>Re-enter Password</Form.Label>
          <Form.Control type="password" onChange={handleChange} value={formData.password} name="password" />
        </Form.Group>
        {
          errMsg ?
            errMsg.map(msg => <Alert variant="danger">{msg}</Alert>) :
            null
        }
        {
          successMsg ?
            <Alert variant="success">Successfully updated!</Alert> :
            null
        }
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}

export default ProfileForm;