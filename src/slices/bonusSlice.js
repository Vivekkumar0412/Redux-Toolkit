import { createSlice } from "@reduxjs/toolkit";
export const increseByAmount = "account/increseByAmount"
const initialState= {
    points : 1
}

const bonusSlice = createSlice({
    name : "bonus",
    initialState,
    reducers : {
        incrementBonus : (state)=>{
            state.points += 10
        },
        decrementBonus : (state)=>{
            state.points -= 10
        },
        incByPoints : (state,action)=>{
            state.points += action.payload
        }
    },
    extraReducers : (builder)=>{
       builder.addCase(increseByAmount,(state,action)=>{
        if(action.payload >= 100){
            let pointss = action.payload/100;
            state.points += pointss
        }
       })
    }
});

export const {incByPoints,incrementBonus,decrementBonus} = bonusSlice.actions;
export default bonusSlice.reducer