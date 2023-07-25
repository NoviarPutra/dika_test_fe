import React from "react";
import { RegisterForm } from "../../components/atoms";
import { Container } from "react-bootstrap";

const Register = () => {
  return (
    <React.Fragment>
      <Container>
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <RegisterForm />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Register;
