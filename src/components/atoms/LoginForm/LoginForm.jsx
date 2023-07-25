import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Field } from "../../molecules";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <Card className='text-center' style={{ width: "21rem" }}>
      <Card.Body>Login</Card.Body>
      <Container>
        <Field placeholder='Email' />
        <Field placeholder='Password' type='password' />
        <Button className='mb-3' variant='success' size='sm'>
          Login
        </Button>
        <pre>
          Don't have an account?{" "}
          <NavLink to='/register'>
            <span style={{ cursor: "pointer", color: "blue" }}>
              Click here!
            </span>
          </NavLink>
        </pre>
      </Container>
    </Card>
  );
};

export default LoginForm;
