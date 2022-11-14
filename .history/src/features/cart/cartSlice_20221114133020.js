import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartitems : [],
    amount: 0,
    total: 0    ,
    isLoading: tr

}

const cartSlice = createSlice ({
    name: 'cart',
initialState
})