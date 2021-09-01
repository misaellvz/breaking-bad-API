import "../styles/StylesComponents/Home.css";
import jessyAndWalter from "../images/Jessy and Walter.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-h1">Breaking Bad</h1>
      <p>This is a Single page application it does not match the route from the backend
      </p>
      <img src={jessyAndWalter} alt="Walter White" />
    </div>
  );
}

export default Home
