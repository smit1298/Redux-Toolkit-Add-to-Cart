import { ChevronDown, ChevronUp } from "../icons";

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart">
      <img src={img} alt={title} />
    </article>
  );
};

export default CartItem;
