import { Formik, Field, Form, FormGroup } from "formik";
import { Label } from "reactstrap";
import { Link } from "react-router-dom";

const WhenForm = () => {
  return (
    <div className="form">
      <h1>Tell us about your event</h1>
    <Formik>
      <Form>
        <FormGroup>
          <Label>When is your event?</Label>
          <Field></Field>
        </FormGroup>
      </Form>
    </Formik>
      
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