import { createSlice } from "@reduxjs/toolkit";



const initialState={
    cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
    cartTotalQuantity:0,
    cartTotalAmout:0,
    price: 22,

}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
addToCart(state,action){
const itemIndex=state.cartItems.findIndex((item)=>item.idDrink===action.payload.idDrink)

if(itemIndex !== -1){
    state.cartItems[itemIndex].cartQuantity +=1
} else{
    const tempProduct={...action.payload,cartQuantity:1};
    state.cartItems.push(tempProduct)
}

localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
    
 },

 removeFromCart(state,action){
const filteredCartItems=state.cartItems.filter((item)=>item.idDrink!==action.payload.idDrink)
state.cartItems=filteredCartItems;
localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
 },

 decrease(state,action){
const itemIndex=state.cartItems.findIndex(item=>item.idDrink===action.payload.idDrink)

if(state.cartItems[itemIndex].cartQuantity>1){
    state.cartItems[itemIndex].cartQuantity-=1
} else if(state.cartItems[itemIndex].cartQuantity===1){
    const filteredCartItems=state.cartItems.filter((item)=>item.idDrink!==action.payload.idDrink)
state.cartItems=filteredCartItems;

}

localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

 },

 increase(state, action) {
    const itemIndex = state.cartItems.findIndex((item) => item.idDrink === action.payload.idDrink);

    if (itemIndex !== -1) {
      state.cartItems[itemIndex].cartQuantity += 1;
    } else {
      const tempProduct = { ...action.payload, cartQuantity: 1 };
      state.cartItems.push(tempProduct);
    }

    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
    
  clearCart (state,action){
   state.cartItems=[];
   localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },

  getTotals(state) {
    let { total, quantity } = state.cartItems.reduce(
      (cartTotal, cartItem) => {
        const { cartQuantity } = cartItem;
        const { price } = state;
        const itemTotal = price * cartQuantity;
  
        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;
  
        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
  
    total = parseFloat(total.toFixed(2));
  
    state.cartTotalQuantity = quantity;
    state.cartTotalAmount = total;
  },
  
 }


 
    
    

})


export const {addToCart,removeFromCart,decrease,increase,clearCart,getTotals}=cartSlice.actions;
export default cartSlice.reducer;