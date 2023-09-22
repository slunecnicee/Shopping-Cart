import { useSelector,useDispatch } from "react-redux";

import { clearCart, decrease, getTotals, increase, removeFromCart } from "../Features/cartSlice";
import { useEffect } from "react";
import EmptyCart from "./containers/EmptyCart";
import CartItemCont from "./containers/CartItemCont";

const Cart = () => {



const dispatch=useDispatch()
const cart=useSelector((state)=>state.cart);



useEffect(()=>{

    dispatch(getTotals());

},[cart,dispatch])

const handleRemove=(cartItem)=>{
 
dispatch(removeFromCart(cartItem))

}


const handleDecrease=(cartItem)=>{
dispatch(decrease(cartItem))
}

const handleIncrease=(cartItem)=>{
dispatch(increase(cartItem))
}


const handleClear=()=>{
    dispatch(clearCart())
}

return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <EmptyCart/>
):(
   <CartItemCont
   cart={cart}
   onClear={handleClear}
   onDecrease={handleDecrease}
   onIncrease={handleIncrease}
   onRemove={handleRemove}
   />
)}
       </div>
     );
}
 
export default Cart;