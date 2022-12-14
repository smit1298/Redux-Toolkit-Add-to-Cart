import { ChevronDown, ChevronUp } from "../icons";

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amoun-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amoun</p>
        <button className="amoun-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
