import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateForm } from "../utils/validateForm";
import "../App.css";
import { Link } from "react-router-dom";
import { Label, FormGroup, Col } from "reactstrap";
import { Button } from "reactstrap";
import { TandC } from "../utils/TandC";

const AdditionalInfo = () => {
  const initialValues = {
    referal: "",
    notes: "",
    tandc: false,
  };

  const [tandcShow, toggleTandcShow] = useState(false);

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values));
  };

  const handleClick = () => {
    toggleTandcShow(!tandcShow);
  };

  return (
    <div className="form">
      <h1>Additional Notes</h1>
      <br />
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form className="KB-form">
          <FormGroup md="12">
            <Field
              as="textarea"
              name="referal"
              className="form-control field"
              placeholder="How'd you hear about us?"
            />
          </FormGroup>

          <br />

          <FormGroup md="12">
            <Field
              as="textarea"
              name="notes"
              className="form-control field"
              placeholder="Any additional note about your event"
            />
          </FormGroup>

          <br />

          <FormGroup md="12">
            <Field name="tandc" type="checkbox" className="form-check-input" />{" "}
            <Label check htmlFor="tandc">
              I agree to Kevin's Balloons{" "}
              <a href="#0" onClick={handleClick}>
                T&C
              </a>
            </Label>
            {tandcShow && <TandC />}
            <ErrorMessage name="tandc">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </FormGroup>

          <Button type="submit" color="info">
            Submit
          </Button>
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
        <Link to="/info">
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
        <Link to="/additional">
          <i className="fa fa-solid fa-circle form-navigation-active" />
        </Link>
      </div>
    </div>
  );
};

export default AdditionalInfo;
