import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartitems : [],
    amount: 0,
    total
}

const cartSlice = createSlice ({
    name: 'cart',
initialState
})