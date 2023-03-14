import { Formik, Field, Form } from "formik";
import { Label, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

const GuestsForm = () => {
  // const [numGuests, setNumGuests] = useState(0);

  const navigate = useNavigate();

  const initialValues = {
    numGuests: "",
    ageRange: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    navigate("/additional");
  };

 

  return (
    <div className="form">
      <h1>Tell us about you event</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => (
          <Form className="KB-form">
            <FormGroup>
              <Label>Approximately how many guests/kids do you expect?</Label>
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="range"
                  min="0"
                  max="100"
                  id="numGuests"
                  value={formikProps.values.numGuests}
                  name="numGuests"
                  className="field"
                  onChange={(e) => {
                    formikProps.setFieldValue("numGuests", parseInt(e.target.value));
                  }}
                  style={{ width: "300px" }}
                /> {' '}
                <span className="range-display">{formikProps.values.numGuests}</span>
              </div>

              <Label>What's the age range of the guests/kids?</Label>
              <Field
                name="ageRange"
                className="form-control field"
                placeholder="ex. 4-8"
              />
            </FormGroup>
            <Button type="submit" color="info">
              Next
            </Button>
          </Form>
        )}
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
          <i className="fa fa-solid fa-circle " />
        </Link>
        <Link to="/where">
          <i className="fa fa-solid fa-circle " />
        </Link>
        <Link to="/guests">
          <i className="fa fa-solid fa-circle form-navigation-active" />
        </Link>
          <i className="fa fa-solid fa-circle not-yet" />
      </div>
    </div>
  );
};

export default GuestsForm;


