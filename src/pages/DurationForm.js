import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../App.css";import { Link } from "react-router-dom";

const DurationForm = () => {
  return (
    <div className="form">
      <div>How long do you need Kevin?</div>
      <Link className="nav-link" to="/when">
        <button className="btn btn-primary" type="submit">
          Next{" "}
        </button>
      </Link>
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
