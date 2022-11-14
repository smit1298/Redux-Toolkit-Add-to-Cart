import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { iteratorSymbol } from "immer/dist/internal";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map(()=>{
            return <cartItem key={iteratorSymbol.id}/>
        })}
      </div>
    </section>
  );
};

export default CartContainer;
