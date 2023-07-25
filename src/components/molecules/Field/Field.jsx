import React from "react";
import { Form } from "react-bootstrap";

const Field = ({ placeholder, type, size, onChange }) => {
  return (
    <React.Fragment>
      <Form.Control
        className='mt-3 mb-3'
        size={size || "sm"}
        type={type || "text"}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete='off'
      />
    </React.Fragment>
  );
};

export default Field;
