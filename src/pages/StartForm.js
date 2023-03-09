import { Link } from "react-router-dom";
const StartForm = () => {
  return (
    <>
    <div>Let's Start</div>
    <Link className="nav-link" to="/duration">
            <button className="btn btn-primary" type="submit">
              Let's get this party started!
            </button>
          </Link>
    <div className="form-navigation">
      <Link to="/">
        <i className="fa fa-solid fa-circle form-navigation-active" />
      </Link>
      <Link to="/duration">
        <i className="fa fa-solid fa-circle not-yet" />
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
    </>
  );
};

export default StartForm;
