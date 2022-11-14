import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, use } from "react-redux";

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
