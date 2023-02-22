import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  instagram: "",
};

const PersonalInfo = () => {
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
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form>
        <Form
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <ErrorMessage name="firstName" />
        <Form
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <ErrorMessage name="lastName" />
        <Form
          type="email"
          name="email"
          value={email}
          placeholder="Best email to reach you"
          onChange={handleChange}
        />
        <ErrorMessage name="email" />
        <Form
          type="tel"
          name="phone"
          value={phone}
          placeholder="Best phone number to reach you"
          onChange={handleChange}
        />
        <ErrorMessage name="phone" />
        <Form
          type="text"
          name="instagram"
          value={instagram}
          placeholder="If you prefer Instagram messaging, write your handle"
          onChange={handleChange}
        />
        <ErrorMessage name="instagram" />

        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};

export default PersonalInfo;
