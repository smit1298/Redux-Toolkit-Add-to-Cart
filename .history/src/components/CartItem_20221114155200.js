import { ChevronDown, ChevronUp } from "../icons";

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article>
      <img src={img} alt={title} />
    </article>
  );
};

export default CartItem;
