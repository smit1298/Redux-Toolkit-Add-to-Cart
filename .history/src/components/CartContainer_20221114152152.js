import CartItem from './CartItem';
import {useSelector} from 'react-redux'

const CartContainer = () => {
    const {cartItems, total,amount} = useSelector((store)=>store.cart)
    if (amount <1)
  return (
    <div>CartContainer</div>
  )
}

export default CartContainer