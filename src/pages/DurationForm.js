import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { FAQDuration } from "../utils/FAQDuration";
import { validateDurationForm } from "../utils/validateDurationForm";
import { Button } from "reactstrap";

const DurationForm = () => {
  const [faqShow, toggleFaqShow] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    toggleFaqShow(!faqShow);
  };

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values));
    navigate("/when");
  };

  return (
    <div className="form">
      <h1>Tell us about your event</h1>
      <div>How long would you like Kevin to perform at your event?</div>
      <Formik
        initialValues={{ duration: "" }}
        validate={validateDurationForm}
        onSubmit={handleSubmit}
      >
        <Form className="KB-form">
          <Field
            as="select"
            name="duration"
            className="form-control field"
            style={{ width: "300px" }}
          >
            <option value="">Select the number of hours</option>
            <option value="1">1 hour</option>
            <option value="1.5">1.5 hours</option>
            <option value="2">2 hours</option>
            <option value="2.5">2.5 hours</option>
            <option value="3">3 hours</option>
            <option value="3.5">3.5 hours</option>
            <option value="4">4 hours</option>
            <option value="4.5">4.5 hours</option>
            <option value="5">5 hours</option>
            <option value="5.5">5.5 hours</option>
            <option value="6">6 hours</option>
            <option value="7">7 hours</option>
            <option value="8">8+ hours</option>
          </Field>
          <br />

          <ErrorMessage name="duration">
            {(msg) => <p className="text-danger ">{msg}</p>}
          </ErrorMessage>
          <p style={{ display: "flexEnd" }}>
            <a className="small-text" href="#0" onClick={handleClick}>
              FAQ: How much time should I book?
            </a>
          </p>
          {faqShow && <FAQDuration />}
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
          <i className="fa fa-solid fa-circle form-navigation-active" />
        </Link>

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />
      </div>
    </div>
  );
};

export default DurationForm;
