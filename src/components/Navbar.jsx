import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="left-element">
        <Link to="/">Home</Link>
      </div>
      <div className="right-element">
        <Link to="/profile">
          <img src="abc.jpg" alt="DP"></img>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
