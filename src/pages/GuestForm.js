import { Formik, Field, Form } from "formik";
import { Label, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const initialValues = {
  numGuests: 0,
  ageRange: "",
};

const GuestsForm = () => {
  const [formValues, updateFormValues] = useState(initialValues);
  const { numGuests, ageRange } = formValues;

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
      <h1>Tell us about you event</h1>
      <Formik onSubmit={handleSubmit}>
        <Form className="KB-form">
          <FormGroup>
            <Label>Approximately how many guests/kids do you expect?</Label>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="range"
                min="0"
                max="100"
                value={numGuests}
                name="numGuests"
                className="field"
                onChange={handleChange}
                style={{width:"300px"}}
              />

              {numGuests && <p className="range-display">{numGuests}</p>}
            </div>
         
            <Label>What's the age range of the guests/kids?</Label>
            <Field
              name="ageRange"
              value={ageRange}
              onChange={handleChange}
              className="form-control field"
              placeholder="ex. 4-8"
            />
          </FormGroup>
        </Form>
      </Formik>

      <Link className="nav-link" to="/info">
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
          <i className="fa fa-solid fa-circle " />
        </Link>
        <Link to="/guests">
          <i className="fa fa-solid fa-circle form-navigation-active" />
        </Link>
        <Link to="/info">
          <i className="fa fa-circle not-yet" />
        </Link>
      </div>
    </div>
  );
};

export default GuestsForm;
