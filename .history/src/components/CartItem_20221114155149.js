import { ChevronDown, ChevronUp } from "../icons";

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article>
      <img src={img} alt="" />
    </article>
  );
};

export default CartItem;
