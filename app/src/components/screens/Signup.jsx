import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Signup() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    termsAccepted: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newvalue = type == "checkbox" ? checked : value;

    setFormValues({
      ...formValues,
      [name]: newvalue,
    });
    validateField(name, newvalue);
  };

  const getValidationClass = (name) => {
    if (formValues[name] === "") return "";
    return formErrors[name] ? "is-invalid" : "is-valid";
  };

  const isFormValid = () => {
    return (
      Object.values(formErrors).every((error) => error === null) &&
      Object.values(formValues).every(
        (value) => value !== "" && value !== false,
      )
    );
  };

  const validateField = (name, value) => {
    let errorMessage = null;
    switch (name) {
      case "firstName":
      case "lastName":
        if (!value) {
          errorMessage = "this field is required...";
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMessage = "Invalid email format...";
        }
        break;

      case "password":
        if (value.length < 6) {
          errorMessage = "Password must be 6 characters";
        }
        break;

      case "confirmpassword":
        if (value !== formValues.password) {
          errorMessage = "Password do not match";
        }
        break;

      case "phoneNumber":
        if (!value || value.length < 10) {
          errorMessage = "Invalid Phone Number";
        }
        break;

      case "gender":
        if (!value) {
          errorMessage = "Please select gender";
        }
        break;

      case "userType":
        if (!value) {
          errorMessage = "Please select usertype";
        }
        break;

      case "termsAccepted":
        if (!value) {
          errorMessage = "You Must Accept the terms and conditions";
        }
        break;

      default:
        break;
    }
    setFormErrors({
      ...formErrors,
      [name]: errorMessage,
    });
  };

  return (
    <Container>
      <Row>
        <Col md="3"></Col>
        <Col md="6">
          <Form>
            <br />

            <h3 className="text-center">SignUp Here</h3>

            <Form.Group controlId="firstname" className="mt-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                isInvalid={!!formErrors.firstName}
                className={getValidationClass("firstName")}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="lastname" className="mt-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                isInvalid={!!formErrors.lastName}
                 className={getValidationClass("lastname")}
              />

              <Form.Control.Feedback type="invalid">
                {formErrors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <br />

            <Form.Select
              aria-label="Select gender"
              
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
              isInvalid={!!formErrors.gender}
              className={getValidationClass("gender")}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {formErrors.gender}
            </Form.Control.Feedback>

            <Form.Group controlId="pass" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Your Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                isInvalid={!!formErrors.phoneNumber}
                className={getValidationClass("phoneNumber")}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {formErrors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                isInvalid={!!formErrors.email}
                className={getValidationClass("email")}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                isInvalid={!!formErrors.password}
                 className={getValidationClass("password")}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {formErrors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="mt-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Your Password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                isInvalid={!!formErrors.confirmPassword}
                className={getValidationClass("confirmPassword")}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <div key={`inline-radio`} className="mt-3">
              <Form.Check
                inline
                label="Student"
                name="userType"
                value="Student"
                onChange={handleChange}
                type="radio"
                id={`inline-radio-1`}
                checked={formValues.userType === "Student"}
                isInvalid={!!formErrors.userType}
              />
              <Form.Check
                inline
                label="Professional"
                name="userType"
                value="Professional"
                onChange={handleChange}
                type="radio"
                id={`inline-radio-2`}
                checked={formValues.userType === "Professional"}
                isInvalid={!!formErrors.userType}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.userType}
              </Form.Control.Feedback>
            </div>

            <Form.Group className="mb-3 mt-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                name="termsAccepted"
                value={formValues.termsAccepted}
                checked={formValues.termsAccepted}
                onChange={handleChange}
                isInvalid={!!formErrors.termsAccepted}
                className={getValidationClass("termsAccepted")}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.termsAccepted}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="success" size="md" disabled={!isFormValid()}>
                Signup
              </Button>
            </div>
          </Form>
        </Col>
        <Col md="3"></Col>
      </Row>
    </Container>
  );
}

export default Signup;
