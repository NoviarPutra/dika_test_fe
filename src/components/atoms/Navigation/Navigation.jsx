import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Navbar className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand>
          <LinkContainer style={{ cursor: "pointer" }} to='/'>
            <h4>Vehicle</h4>
          </LinkContainer>
        </Navbar.Brand>
        <LinkContainer style={{ cursor: "pointer" }} to='/dashboard/products'>
          <h6>Product</h6>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text onClick={handleLogout} style={{ cursor: "pointer" }}>
            Log out
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
