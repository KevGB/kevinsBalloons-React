import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateForm } from "./validateForm";
import "../App.css";
import { NavLink } from "react-router-dom";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    instagram: "",
};

const GuestsForm = () => {
      const [formValues, updateFormValues] = useState(initialValues);
      const { firstName, lastName, email, phone, instagram } = formValues;
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
      };
      const handleChange = (e) => {
        console.log(e.target.value);
        updateFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
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
                value={firstName}
                placeholder="First Name"
                onChange={handleChange}
                className="form-control field"
              />
              <ErrorMessage name="firstName" />
              <Field
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={handleChange}
                className="form-control field"
              />
              <ErrorMessage name="lastName" />
              <Field
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
                className="form-control field"
              />
              <ErrorMessage name="email" />
              <Field
                type="tel"
                name="phone"
                value={phone}
                placeholder="Phone Number"
                onChange={handleChange}
                className="form-control field"
              />
              <ErrorMessage name="phone" />
              <p className="small-text">
                If you prefer Instagram messaging, add your handle here (optional)
              </p>
              <Field
                type="text"
                name="instagram"
                value={instagram}
                placeholder="Instagram"
                onChange={handleChange}
                className="form-control field"
              />
              <ErrorMessage name="instagram" />
    
              <button className="btn btn-primary" type="submit">
                Next
              </button>
            </Form>
          </Formik>
          <div className="form-navigation">
            <NavLink to="/">
              <i className="fa fa-solid fa-circle" />
            </NavLink>
            <NavLink to="/duration">
              <i className="fa fa-solid fa-circle" />
            </NavLink>
            <NavLink to="/when">
              <i className="fa fa-solid fa-circle" />
            </NavLink>
            <NavLink to="/where">
              <i className="fa fa-solid fa-circle" />
            </NavLink>
            <NavLink to="/guests">
              <i className="fa fa-solid fa-circle" />
            </NavLink>
            <NavLink to="/info">
              <i className="fa fa-circle form-navigation-active" />
            </NavLink>
          </div>
        </div>
      );
    };
    
    
  export default GuestsForm;