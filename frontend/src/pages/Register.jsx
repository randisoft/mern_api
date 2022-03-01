import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { name, email, password, cpassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="col-md-6">
        <section className="heading">
          <h1><FaUser /> Register</h1>
          <p>Create an account</p>
        </section>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              id="cpassword"
              name="cpassword"
              value={cpassword}
              placeholder="Re-Enter password"
              onChange={onChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create account
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
