import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../App.css";
import { Link } from "react-router-dom";
import { FAQDuration } from "../components/FAQDuration";

const DurationForm = () => {
  const [faqShow, toggleFaqShow] = useState(false);

  const handleClick = () => {
    toggleFaqShow(!faqShow);
  };

  const handleChange = () => {
    console.log(Field.value);
  };

  return (
    <div className="form">
      <h1>Tell us about your event</h1>
      <div>How long would you like Kevin to perform at your event?</div>
      <Formik>
        <Form>
          <Field
            as="select"
            name="duration"
            className="form-control"
            onChange={handleChange}
          >
            <option value=""></option>
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
          <ErrorMessage name="duration">
            {(msg) => <p className="text-danger ">{msg}</p>}
          </ErrorMessage>
          <p className="faq-btn">
            <a href="#0" onClick={handleClick}>
              FAQ: How much time should I book?
            </a>
          </p>
          {faqShow && <FAQDuration />}
          <Link className="nav-link" to="/when">
            <button className="btn btn-primary" type="submit">
              Next{" "}
            </button>
          </Link>
        </Form>
      </Formik>
      <div className="form-navigation">
        <Link to="/">
          <i className="fa fa-solid fa-circle " />
        </Link>
        <Link to="/duration">
          <i className="fa fa-solid fa-circle form-navigation-active" />
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
        <Link to="/info">
          <i className="fa fa-circle not-yet" />
        </Link>
      </div>
    </div>
  );
};

export default DurationForm;
