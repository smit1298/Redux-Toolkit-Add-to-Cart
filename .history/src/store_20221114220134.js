import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'
import

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        
    },
})