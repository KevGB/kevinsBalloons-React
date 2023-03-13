import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateForm } from "../utils/validateForm";
import "../App.css";
import { Link } from "react-router-dom";
import { Label, FormGroup, Col } from "reactstrap";
import { Button } from "reactstrap";

const PersonalInfo = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    instagram: "",

  };


  const handleSubmit = (values) => {
    console.log(JSON.stringify(values));
  };



  return (
    <div className="form">
      <h1>Tell us about yourself</h1>
      <br />
      <p>Your contact info</p>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form className="KB-form">
          <FormGroup md="12">
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-control field"
            />
            <ErrorMessage name="firstName">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </FormGroup>

          <FormGroup md="12">
            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form-control field"
            />
            <ErrorMessage name="lastName">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </FormGroup>

          <FormGroup md="12">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="form-control field"
            />
            <ErrorMessage name="email">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </FormGroup>

          <FormGroup md="12">
            <Field
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="form-control field"
            />
            <ErrorMessage name="phone">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </FormGroup>

          <FormGroup md="12">
            <Label className="small-text">
              If you prefer Instagram messaging, add your handle here (optional)
              <Field
                type="text"
                name="instagram"
                placeholder="Instagram"
                className="form-control field"
              />
            </Label>
          </FormGroup>


          <Button type="submit" color="info">
            Submit
          </Button>
        </Form>
      </Formik>
      <Link className="nav-link" to="/duration">
        <button className="btn btn-primary" type="submit">
          next
        </button>
      </Link>
      <div className="form-navigation">
        <Link to="/">
          <i className="fa fa-solid fa-circle" />
        </Link>
        <Link to="/info">
          <i className="fa fa-solid fa-circle form-navigation-active" />
        </Link>
        <Link to="/duration">
          <i className="fa fa-solid fa-circle not-yet" />
        </Link>
        <Link to="/when">
          <i className="fa fa-solid fa-circle not-yet" />
        </Link>
        <Link to="/where">
          <i className="fa fa-solid fa-circle not-yet" />
        </Link>
        <Link to="/guests">
          <i className="fa fa-solid fa-circle not-yet" />
        </Link>
        <Link to="/additional">
          <i className="fa fa-solid fa-circle not-yet" />
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
