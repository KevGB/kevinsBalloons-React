import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateForm } from "./validateForm";
import "../App.css";
import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { Button } from "reactstrap";
import { TandC } from "../components/TandC";

const PersonalInfo = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    instagram: "",
    referal: "",
    notes: "",
  };
  // const [formValues, updateFormValues] = useState(initialValues);
  const [tandcShow, toggleTandcShow] = useState(false);
  // const { firstName, lastName, email, phone, instagram, referal, notes } = formValues;

  const handleSubmit = () => {
    // e.preventDefault();
    console.log({formValues});
  };
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   updateFormValues({
  //     ...formValues,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(formValues);
  // };

  const handleClick = () => {
    toggleTandcShow(!tandcShow);
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
          <Field
            type="text"
            name="firstName"
            // value={firstName}
            placeholder="First Name"
            className="form-control field"
          />
          <ErrorMessage name="firstName">
            {(msg) => <p className="text-danger">{msg}</p>}
          </ErrorMessage>
          <Field
            type="text"
            name="lastName"
            // value={lastName}
            placeholder="Last Name"
            className="form-control field"
          />
          <ErrorMessage name="lastName">
            {(msg) => <p className="text-danger">{msg}</p>}
          </ErrorMessage>
          <Field
            type="email"
            name="email"
            // value={email}
            placeholder="Email"
            className="form-control field"
          />
          <ErrorMessage name="email">
            {(msg) => <p className="text-danger">{msg}</p>}
          </ErrorMessage>
          <Field
            type="tel"
            name="phone"
            // value={phone}
            placeholder="Phone Number"
            className="form-control field"
          />
          <ErrorMessage name="phone">
            {(msg) => <p className="text-danger">{msg}</p>}
          </ErrorMessage>
          <Label className="small-text">
            If you prefer Instagram messaging, add your handle here (optional)
            <Field
              type="text"
              name="instagram"
              // value={instagram}
              placeholder="Instagram"
              className="form-control field"
            />
          </Label>
          <br />
          <Field
            as="textarea"
            // value={referal}
            name="referal"
            className="form-control field"
            placeholder="How'd you hear about us?"
          />
          <br />
          <Field
            as="textarea"
            // value={notes}
            name="notes"
            className="form-control field"
            placeholder="Any additional note about your event"
          />
          <br />
          <Label>
            <Field
              name="tandc"
              type="checkbox"
              className="form-check-input field"
            />{" "}
            Do you agree to our{" "}
            <a href="#0" onClick={handleClick}>
              T&C
            </a>
            ?
            <ErrorMessage name="tandc">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
            {tandcShow && <TandC />}
          </Label>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
      <Link className="nav-link" to="/thankyou">
        <button className="btn btn-primary" type="submit">
          Finish
        </button>
      </Link>
      <div className="form-navigation">
        <Link to="/">
          <i className="fa fa-solid fa-circle" />
        </Link>
        <Link to="/duration">
          <i className="fa fa-solid fa-circle" />
        </Link>
        <Link to="/when">
          <i className="fa fa-solid fa-circle" />
        </Link>
        <Link to="/where">
          <i className="fa fa-solid fa-circle" />
        </Link>
        <Link to="/guests">
          <i className="fa fa-solid fa-circle" />
        </Link>
        <Link to="/info">
          <i className="fa fa-solid fa-circle form-navigation-active" />
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
