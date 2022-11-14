import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartitems : [],
    amount: 0,
    total: 0    ,
    isLo

}

const cartSlice = createSlice ({
    name: 'cart',
initialState
})