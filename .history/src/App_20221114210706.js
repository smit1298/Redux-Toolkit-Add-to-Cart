import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import {calculateTotals} from './features/cart/cartSlice'

function App() {
  const {cartItems} = useSelector((store) => store.cart)
  const dispatch = used
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
