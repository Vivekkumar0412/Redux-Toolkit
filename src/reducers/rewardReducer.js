import { createAction,createReducer } from "@reduxjs/toolkit";
export const incrementReward = createAction("reward/increment")
export const incrementRewardByPoint = createAction("reward/incrementByPoint")
const initialState = {
    points : 59
}
const rewardReducer = createReducer(initialState,(builder)=>{
    builder.addCase(incrementReward,(state,action)=>{
        state.points+= 10
    })
    .addCase(incrementRewardByPoint,(state,action)=>{
        state.points += action.payload
    })
});

export default rewardReducer;