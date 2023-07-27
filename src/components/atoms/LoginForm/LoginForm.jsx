import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Field } from "../../molecules";
import { NavLink, useNavigate } from "react-router-dom";
import { loginAxios } from "../../../api/axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email: email,
        password: pwd,
      };

      const response = await loginAxios(payload);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
      setEmail("");
      setPwd("");
    } catch (error) {
      setEmail("");
      setPwd("");
      console.log(error.response.data.message);
    }
  };
  return (
    <Card className='text-center' style={{ width: "21rem" }}>
      <Card.Body>Login</Card.Body>
      <Container>
        <Field
          placeholder='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field
          placeholder='Password'
          type='password'
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <Button
          className='mb-3'
          type='submit'
          variant='success'
          size='sm'
          onClick={handleSubmit}>
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
