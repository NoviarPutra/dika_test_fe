import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import useAuthContext from "../../context/useAuthContext";

const VehicleBrands = () => {
  const { user } = useAuthContext();

  return (
    <React.Fragment>
      <Container>
        <Card className='mt-3' style={{ width: "18rem" }}>
          <Card.Body>
            <Row className='d-flex justify-content-start mb-3'>
              <Col md={3}>
                {user && (
                  <Image src={user.photo} thumbnail alt='Preview Image' />
                )}
              </Col>
              <Col md={7}>
                {user && <p className='h5 mt-3'>{user.fullname}</p>}
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Container className='mt-3'></Container>
      </Container>
    </React.Fragment>
  );
};

export default VehicleBrands;
