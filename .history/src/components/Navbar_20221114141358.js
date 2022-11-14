import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

 const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3>smit store</h3>
        <div className="nav-container">
            <CartIcon />
            .amount
        </div>
      </div>
    </nav>
  );
};

export default Navbar