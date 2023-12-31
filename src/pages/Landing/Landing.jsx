import React from "react";
import { Container } from "react-bootstrap";
import { LoginForm } from "../../components/atoms";

const Landing = () => {
  return (
    <React.Fragment>
      <Container>
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <LoginForm />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Landing;
