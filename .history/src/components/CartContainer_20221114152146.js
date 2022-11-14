import CartItem from './CartItem';
import {useSelector} from 'react-redux'

const CartContainer = () => {
    const {cartItems, total,amount} = useSelector((store)=>store.cart)
    if (amound)
  return (
    <div>CartContainer</div>
  )
}

export default CartContainer