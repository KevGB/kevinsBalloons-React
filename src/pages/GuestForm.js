
import { Link } from "react-router-dom";



const GuestsForm = () => {
     return (
      <>
        <div>How many Guests do you expect?</div>
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
      </>
    );
    };
    
    
  export default GuestsForm;