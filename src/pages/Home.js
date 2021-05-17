
import jessyAndWalter from "../images/Jessy and Walter.jpg";
import "../index.css"

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-h1">Breaking Bad</h1>
      <img src={jessyAndWalter} alt="Walter White" />
    </div>
  );
}

export default Home
