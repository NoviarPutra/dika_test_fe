import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Field } from "../../molecules";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  return (
    <Card className='text-center' style={{ width: "21rem" }}>
      <Card.Body>Register</Card.Body>
      <Container>
        <Field placeholder='Email' />
        <Field placeholder='Password' type='password' />
        <Field placeholder='Full Name' type='password' />
        <Field placeholder='Photo' type='password' />
        <Button className='mb-3' variant='success' size='sm'>
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
