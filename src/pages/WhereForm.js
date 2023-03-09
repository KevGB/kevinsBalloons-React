import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { FormGroup, Label } from "reactstrap";
import { useState } from "react";

const initialValues = {
  address: "",
  addressTwo: "",
  city: "",
  state: "",
  country: "",
  locationType: "",
  specification: "",
  parking: "",
};

const WhereForm = () => {
  const [formValues, updateFormValues] = useState(initialValues);
  const {
    address,
    addressTwo,
    city,
    state,
    country,
    locationType,
    specification,
    parking,
  } = formValues;

  const handleSubmit = () => {
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
      <h1>Tell us about your event</h1>
      <Formik onSubmit={handleSubmit}>
        <Form>
          <FormGroup>
            <Label>Where is your event?</Label>
            <Field
              name="address"
              type="text"
              placeholder="Address"
              value={address}
              className="form-control"
              onChange={handleChange}
            />
            <Field
              name="addressTwo"
              type="text"
              placeholder=""
              value={addressTwo}
              className="form-control"
              onChange={handleChange}
            />
            <div style={{ display: "flex" }}>
              <Field
                name="city"
                type="text"
                placeholder="city"
                value={city}
                className="form-control"
                onChange={handleChange}
              />
              <Field
                name="state"
                type="text"
                placeholder="State"
                value={state}
                className="form-control"
                onChange={handleChange}
              />
              <Field
                name="country"
                type="text"
                placeholder="Country"
                value={country}
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label>What type of location is this?</Label>
            <Field
              as="select"
              name="locationType"
              value={locationType}
              className="form-control"
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="daycare">Daycare</option>
              <option value="backyard">Backyard</option>
              <option value="school">School</option>
              <option value="indoor venue">Indoor Event Venue</option>
              <option value="outdoor venue">Outdoor Event Venue</option>
              <option value="Spark Social SF">Spark Social SF</option>
              <option value="public park">Public Park</option>
            </Field>
            <Label>If not listed, please specify</Label>
            <Field
              type="text"
              name="specification"
              value={specification}
              className="form-control"
              placeholder="ex: Yacht, Water Park, Chocolate Factory"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>What parking is available?</Label>
            <Field
            as="textarea"
            name="parking"
            value={parking}
            className="form-control"
            onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </Formik>
      <Link className="nav-link" to="/guests">
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
          <i className="fa fa-solid fa-circle " />
        </Link>
        <Link to="/where">
          <i className="fa fa-solid fa-circle form-navigation-active" />
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

export default WhereForm;
