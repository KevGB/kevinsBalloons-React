import { Link } from "react-router-dom";

const StartForm = () => {
  return (
    <div className="form">
      <h1 className="start-headline">All right!</h1>
      <h3>Let's book your event!</h3>
      <p>Just answer a few short questions</p>
      <Link className="nav-link" to="/info">
        <button className="btn btn-primary" type="submit">
          Let's get this party started!
        </button>
      </Link>
      <div className="form-navigation">
        <Link to="/">
          <i className="fa fa-solid fa-circle form-navigation-active" />
        </Link>

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />
      </div>
    </div>
  );
};

export default StartForm;
