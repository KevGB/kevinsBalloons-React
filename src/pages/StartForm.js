import { Link } from "react-router-dom";

const StartForm = () => {
  return (
    <div className="form">
    <h1>All right!</h1>
    <h3>Let's book your event!</h3>
    <p>Just answer a few short questions</p>
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
    </div>
  );
};

export default StartForm;
