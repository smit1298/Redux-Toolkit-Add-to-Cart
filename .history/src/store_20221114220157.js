import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'
import moddalReducer from './features/'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        
    },
})