import { Formik, Field, Form, ErrorMessage } from "formik";
import { Label, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FAQAvailability } from "../utils/FAQAvailability";
import { validateWhenForm } from "../utils/validateWhenForm";

const WhenForm = () => {
  const initialValues = {
    date: "",
    time: "",
  };

  const navigate = useNavigate();

  const [faqShow, toggleFaqShow] = useState(false);

  const handleClick = () => {
    toggleFaqShow(!faqShow);
  };

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values));
    navigate("/where");
  };

  return (
    <div className="form">
      <h1>Tell us about your event</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateWhenForm}
      >
        <Form className="KB-form">
          <FormGroup>
            <Label>When is your event?</Label>
            <Field name="date" type="date" className="form-control field" />
            <ErrorMessage name="date">
              {(msg) => <p className="text-danger ">{msg}</p>}
            </ErrorMessage>
          </FormGroup>

          <FormGroup>
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

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />
      </div>
    </div>
  );
};

export default WhenForm;
