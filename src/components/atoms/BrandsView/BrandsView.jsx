import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import {
  addBrands,
  deleteBrand,
  getBrands,
  updateBrand,
} from "../../../api/axios";
import { Field } from "../../molecules";
import useAuthContext from "../../../context/useAuthContext";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Button type='button' variant='success' onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}

const BrandsView = () => {
  const { user } = useAuthContext();
  const [data, setData] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [imgBrand, setImgBrand] = useState("");
  const [preview, setPreview] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState({});

  const loadImage = (e) => {
    const img = e.target.files[0];
    setImgBrand(img);
    setPreview(URL.createObjectURL(img));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", brandName);
      formData.append("photo", imgBrand);
      formData.append("created_by", user.id);
      formData.append("updated_by", user.id);

      await addBrands(formData);
      await getVehicles();
      setBrandName("");
      setImgBrand("");
      setPreview("");
    } catch (error) {
      setBrandName("");
      setImgBrand("");
      setPreview("");
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", brandName);
      formData.append("photo", imgBrand);
      formData.append("updated_by", user.id);
      await updateBrand(id, formData);
      await getVehicles();
      setIsUpdate(false);
      setBrandName("");
      setImgBrand("");
      setPreview("");
    } catch (error) {
      setIsUpdate(false);
      setBrandName("");
      setImgBrand("");
      setPreview("");
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteBrand(id);
      await getVehicles();
    } catch (error) {
      console.log(error);
    }
  };

  const getVehicles = async () => {
    await getBrands()
      .then((response) => setData(response.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVehicles();
  }, []);
  return (
    <React.Fragment>
      <Accordion>
        <Card>
          <Card.Header>
            {!isUpdate ? (
              <CustomToggle eventKey='0'>Add Brand</CustomToggle>
            ) : (
              <CustomToggle eventKey='0'>Edit</CustomToggle>
            )}
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <Field
                type='text'
                value={brandName || ""}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder='Brand Name'
              />
              <Field type='file' onChange={loadImage} />
              {preview ? (
                <Row className='d-flex justify-content-start'>
                  <Col md={5}>
                    <Image
                      src={preview}
                      thumbnail
                      alt='Preview Image'
                      style={{ width: "45%" }}
                    />
                  </Col>
                </Row>
              ) : (
                ""
              )}
              <div className='mt-2'>
                {!isUpdate ? (
                  <Button type='submit' onClick={handleSubmit}>
                    Submit
                  </Button>
                ) : (
                  <Container className='d-flex '>
                    <Button
                      type='submit'
                      variant='warning'
                      onClick={handleUpdate}>
                      Edit
                    </Button>
                    <Button
                      type='submit'
                      variant='danger'
                      onClick={() => {
                        setIsUpdate(false);
                        setBrandName("");
                        setImgBrand("");
                        setPreview("");
                      }}>
                      Cancel
                    </Button>
                  </Container>
                )}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Row>
        {data.length > 0
          ? data.map((datas, i) => (
              <Col key={i} className='mb-3 d-flex justify-content-start' md={4}>
                <Card className='mt-3' style={{ width: "22rem" }}>
                  <Card.Body>
                    <Row className='d-flex justify-content-center mb-3'>
                      <Col md={12}>
                        <Image
                          src={datas.photo}
                          thumbnail
                          alt='Preview Image'
                          //   style={{ width: "80%" }}
                        />
                      </Col>
                    </Row>
                    <p className='h6 text-center'>{datas.name}</p>
                    <pre style={{ fontSize: "12px" }}>
                      Created At: {new Date(datas.created_at).toUTCString()}
                    </pre>
                    <pre style={{ fontSize: "12px" }}>
                      Updated At : {new Date(datas.updated_at).toUTCString()}
                    </pre>
                    <Container className='d-flex justify-content-between'>
                      <Button
                        variant='warning'
                        onClick={() => {
                          setIsUpdate(true);
                          setBrandName(datas.name);
                          setPreview(datas.photo);
                          setId(datas.id);
                        }}>
                        Edit
                      </Button>
                      <Button
                        variant='danger'
                        onClick={() => handleDelete(datas.id)}>
                        Delete
                      </Button>
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : ""}
      </Row>
    </React.Fragment>
  );
};

export default BrandsView;
