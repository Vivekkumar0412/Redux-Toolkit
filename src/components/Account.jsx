import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchAccount, increment, increseByAmount } from "../slices/accountSlice";

function Account() {
  // const [amount, setAmount] = useState(0);
  const [inp, setInp] = useState(0);
  const amount = useSelector((state)=> state.account.amount);
  const dispatch = useDispatch();
  return (
    <div className="bg-red-700 flex justify-center items-center flex-col gap-3 w-[40%]">
      <h1 className="text-center text-green font-bold text-white text-4xl">Amount : {amount}</h1>
      <button className="bg-green-500 p-3 m-2 rounded-md text-2xl font-bold text-white" onClick={()=> dispatch(increment())}>Increase By $10</button>
      <button className="bg-blue-500 p-3 m-2 rounded-md text-2xl font-bold text-white" onClick={()=> dispatch(decrement())}>Decrese By $10</button>
      <input className="p-2 text-center font-bold text-2xl rounded-md border border-black" type="text" onChange={(e) => setInp(+e.target.value)} />
      <button className="bg-purple-500 p-3 m-2 rounded-md text-2xl font-bold text-white" onClick={()=> dispatch(increseByAmount(inp))}>Increase by {inp}</button>
      <button className="bg-purple-500 p-3 m-2 rounded-md text-2xl font-bold text-white" onClick={()=> dispatch(fetchAccount(1))}>Fetch by id</button>
    </div>
  );
}

export default Account;
