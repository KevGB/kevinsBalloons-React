import { Formik, Field, Form, ErrorMessage } from "formik";
import { Label, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FAQAvailability } from "../components/FAQAvailability";

const WhenForm = () => {
  const [faqShow, toggleFaqShow] = useState(false);

  const handleClick = () => {
    toggleFaqShow(!faqShow);
  };

  return (
    <div className="form">
      <h1>Tell us about your event</h1>
      <Formik>
        <Form>
          <FormGroup className="form">
            <Label>When is your event?</Label>
            <Field name="date" type="date" className="form-control" />
            <ErrorMessage name="date">
              {(msg) => <p className="text-danger ">{msg}</p>}
            </ErrorMessage>
            <Field name="time" type="time" className="form-control" />
            <ErrorMessage name="time">
              {(msg) => <p className="text-danger ">{msg}</p>}
            </ErrorMessage>
          </FormGroup>
        </Form>
        <p><a href="#0" onClick={handleClick}>FAQ: What is Kevin's Availability?</a></p>
        {faqShow && <FAQAvailability/>}
      <Link className="nav-link" to="/where">
        <button className="btn btn-primary" type="submit">
          Next{" "}
        </button>
      </Link>
      </Formik>

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
