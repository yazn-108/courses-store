import { configureStore } from "@reduxjs/toolkit";
import CartProductsCountSlice from "./CartProductsCountSlice";
export const store = configureStore({
    reducer: {
        CartProductsCountSlice
    }
})