import { Formik, Field, Form, ErrorMessage } from "formik";
import { Label, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FAQAvailability } from "../components/FAQAvailability";

const initialValues = {
  date: "",
  time: "",
};

const WhenForm = () => {
  const [faqShow, toggleFaqShow] = useState(false);
  const [formValues, updateFormValues] = useState(initialValues);
  const { date, time } = formValues;

  const handleClick = () => {
    toggleFaqShow(!faqShow);
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
      <h1>Tell us about your event</h1>
      <Formik>
        <Form className="KB-form">
          <FormGroup style={{ width: "400px" }}>
            <Label>When is your event?</Label>
            <Field
              name="date"
              type="date"
              value={date}
              className="form-control field"
              onChange={handleChange}
            />
            <ErrorMessage name="date">
              {(msg) => <p className="text-danger ">{msg}</p>}
            </ErrorMessage>
            <Field
              name="time"
              type="time"
              value={time}
              className="form-control field"
              onChange={handleChange}
            />
            <ErrorMessage name="time">
              {(msg) => <p className="text-danger ">{msg}</p>}
            </ErrorMessage>
          </FormGroup>
        </Form>
      </Formik>
      <p>
        <a className="small-text" href="#0" onClick={handleClick}>
          FAQ: What is Kevin's Availability?
        </a>
      </p>
      {faqShow && <FAQAvailability />}
      <Link className="nav-link" to="/where">
        <button className="btn btn-primary" type="submit">
          Next{" "}
        </button>
      </Link>

      <div className="form-navigation">
        <Link to="/">
          <i className="fa fa-solid fa-circle " />
        </Link>
        <Link to="/duration">
          <i className="fa fa-solid fa-circle " />
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
        <Link to="/info">
          <i className="fa fa-circle not-yet" />
        </Link>
      </div>
    </div>
  );
};

export default WhenForm;
