import { Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const { headline, tagline, display } = props;

  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/");
  };

  return (
    <Container className="container-fluid header ">
      <div className="overlay">
        <h1 className="start-headline">{headline}</h1>
        <p>{tagline}</p>
        <div className="header-btn-container" style={{ display: { display } }}>
          <button className="btn header-btn header-subscribe bg-white">
            Subscribe
          </button>
          <button
            className="btn header-btn header-book bg-primary"
            onClick={handleBook}
          >
            Book Kevin
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
