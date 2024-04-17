import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetUserCartItems } from '../_fetchData/CartApis'
export const CartProductsCount = createAsyncThunk('users/fetchByIdStatus', async (userToken, thunkAPI) => {
  const response = await GetUserCartItems(userToken)
  return response.data
},
)
const CartProductsCountSlice = createSlice({
  name: 'users',
  initialState: {
    CartProducts: []
  },
  extraReducers: (builder) => {
    builder.addCase(CartProductsCount.fulfilled, (state, action) => {
      state.CartProducts = action.payload
    })
  },
})
export default CartProductsCountSlice.reducer