import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 10,
};

// function getUserById(id){
//   return async()=>{
//     let res = await axios.get(`http://localhost:3000/accounts/${id}`)
//   }
// }
export const fetchAccount = createAsyncThunk(
  'account/getById',
  async (id,thunkApi)=>{
    let res = await axios.get(`http://localhost:3000/accounts/${id}`)
    console.log(res)
    return res.data.amount
  }
)

const amountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 10;
    },
    decrement: (state) => {
      state.amount -= 10;
    },
    increseByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers : (builder)=>{
    builder.addCase(fetchAccount.fulfilled,(state,action)=>{
      state.amount = action.payload
    })
  }
});

export const { increment, decrement, increseByAmount } = amountSlice.actions;

export default amountSlice.reducer;
