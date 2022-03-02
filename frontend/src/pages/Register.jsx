import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";
import { register, reset } from "../features/auth/authSlice";
import Spinner from '../components/Spinner'

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { name, email, password, cpassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      toast.error("Passwords mismatch");
    } else {
      const UserData = {
        name,
        email,
        password,
      };

      dispatch(register(UserData));
    }
  };

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className="col-md-6">
        <section className="heading">
          <h1>
            <FaUser /> Register
          </h1>
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
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter a password"
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
