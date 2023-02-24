import { Container } from "reactstrap";

const Header = (props) => {
  const {image, headline, tagline, display} = props;

  return (
    <Container className="container-fluid header" style={{backgroundImage: `URL(${image})`}}>
     <div className="overlay">
      <h1>{headline}</h1>
      <p>{tagline}</p>
      <div className="header-btn-container" style={{display: {display}}}>
        <button className="btn header-btn header-subscribe bg-white">Subscribe</button>
        <button className="btn header-btn header-book bg-primary">Book Kevin</button>
      </div> 
     </div>

    </Container>
  );
};

export default Header;
