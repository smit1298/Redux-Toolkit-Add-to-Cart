import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";

import {calculateTotals}
function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
