import { Formik, Field, Form, ErrorMessage } from "formik";
import { Label, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FAQAvailability } from "../utils/FAQAvailability";
import { validateForm } from "../utils/validateForm";

const WhenForm = () => {
  const initialValues = {
    date: "",
    time: "",
  };

  const [faqShow, toggleFaqShow] = useState(false);

  const handleClick = () => {
    toggleFaqShow(!faqShow);
  };

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values));
  };

  return (
    <div className="form">
      <h1>Tell us about your event</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <Form className="KB-form">
          <FormGroup>
            <Label>When is your event?</Label>
            <Field name="date" type="date" className="form-control field" />
            <ErrorMessage name="date">
              {(msg) => <p className="text-danger ">{msg}</p>}
            </ErrorMessage>
            <Field name="time" type="time" className="form-control field" />
            <ErrorMessage name="time">
              {(msg) => <p className="text-danger ">{msg}</p>}
            </ErrorMessage>
          </FormGroup>
          <p>
            <a className="small-text" href="#0" onClick={handleClick}>
              FAQ: What is Kevin's Availability?
            </a>
          </p>
          {faqShow && <FAQAvailability />}
          <Button type="submit" color="info">
            Next
          </Button>
        </Form>
      </Formik>
      <Link className="nav-link" to="/where">
        <button className="btn btn-primary" type="submit">
          Next{" "}
        </button>
      </Link>

      <div className="form-navigation">
        <Link to="/">
          <i className="fa fa-solid fa-circle" />
        </Link>
        <Link to="/info">
          <i className="fa fa-solid fa-circle " />
        </Link>
        <Link to="/duration">
          <i className="fa fa-solid fa-circle" />
        </Link>
        <Link to="/when">
          <i className="fa fa-solid fa-circle form-navigation-active" />
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

export default WhenForm;
