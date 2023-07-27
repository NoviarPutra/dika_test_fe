import React, { useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Field } from "../../molecules";
import { NavLink } from "react-router-dom";
import axios from "../../../api/axios";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [fullName, setFullName] = useState("");
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");

  const loadImage = (e) => {
    const img = e.target.files[0];
    setPhoto(img);
    setPreview(URL.createObjectURL(img));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const payload = {
      //   email: email,
      //   password: pwd,
      //   fullname: fullName,
      //   photo: photo,
      // };
      // console.log(payload);
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", pwd);
      formData.append("fullname", fullName);
      formData.append("photo", photo);
      const response = await axios.post("/users/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      console.log(response.data.message);

      setEmail("");
      setPwd("");
      setFullName("");
      setPhoto("");
      setPreview("");
    } catch (error) {
      setEmail("");
      setPwd("");
      setFullName("");
      setPhoto("");
      setPreview("");
      console.log(error.response.data.message);
    }
  };
  return (
    <Card className='text-center' style={{ width: "21rem" }}>
      <Card.Body>Register</Card.Body>
      <Container>
        <Field
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field
          placeholder='Password'
          type='password'
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <Field
          placeholder='Full Name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Field type='file' onChange={loadImage} />
        {preview ? (
          <Row className='d-flex justify-content-center mb-3'>
            <Col md={5}>
              <Image src={preview} thumbnail alt='Preview Image' />
            </Col>
          </Row>
        ) : (
          ""
        )}
        <Button
          className='mb-3'
          type='submit'
          variant='success'
          size='sm'
          onClick={handleSubmit}>
          Register
        </Button>
        <pre>
          <NavLink to='/'>
            <span style={{ cursor: "pointer", color: "blue" }}>
              Back to login!
            </span>
          </NavLink>
        </pre>
      </Container>
    </Card>
  );
};

export default RegisterForm;
