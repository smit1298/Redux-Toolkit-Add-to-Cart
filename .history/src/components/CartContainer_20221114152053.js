import CartItem from './CartItem';
import {useSelector} from 'react-redux'

const CartContainer = () => {
    const {cartItems, total,amount} = useSelector()
  return (
    <div>CartContainer</div>
  )
}

export default CartContainer