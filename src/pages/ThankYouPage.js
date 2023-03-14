import Header from "../components/Header";
import thankyou from "../assets/img/Thankyou.jpg";

const ThankYouPage = () => {
  return (
    <>
      <Header
        headline={"Thank you for Booking!"}
        tagline={"San Francisco's Globally-Demanded Balloon Artist"}
        display={true}
      />
      <br />
      <img src={thankyou} style={{ maxWidth: "100%" }} alt="thank you message from Kevin's Balloons"/>
      <br/>
      <br/>
    </>
  );
};

export default ThankYouPage;
