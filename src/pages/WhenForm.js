import { Link } from "react-router-dom";

const WhenForm = () => {
  return (
    <>
      <div>When is your event?</div>
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
    </>
  );
};

export default WhenForm;