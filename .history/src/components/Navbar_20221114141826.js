import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

 const Navbar = () => {
 const amountt = useSelector((store) =>)
  return (
    <nav>
      <div className="nav-center">
        <h3>smit store</h3>
        <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
                <p className="total-amount">0</p>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar