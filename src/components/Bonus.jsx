import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementBonus, incByPoints, incrementBonus } from "../slices/bonusSlice";

function Bonus() {
  const [inp, setInp] = useState(0);
  const bonus = useSelector((state)=> state.bonus.points)
  const dispatch = useDispatch();


  return (
    <div className="bg-black flex justify-center items-center flex-col gap-3 mt-5 w-[40%]">
      <h1 className="text-center text-green font-bold text-white text-4xl">Bonus : {bonus}</h1>
      <button className="bg-green-500 p-3 m-2 rounded-md text-2xl font-bold text-white" onClick={()=> dispatch(incrementBonus())}>Increase By $10</button>
      <button className="bg-blue-500 p-3 m-2 rounded-md text-2xl font-bold text-white" onClick={()=> dispatch(decrementBonus())}>Decrese By $10</button>
      <input className="p-2 text-center font-bold text-2xl rounded-md border border-black" type="text" onChange={(e) => setInp(+e.target.value)} />
      <button className="bg-purple-500 p-3 m-2 rounded-md text-2xl font-bold text-white" onClick={()=> dispatch(incByPoints(inp))}>Increase by {inp}</button>
    </div>
  );
}

export default Bonus;
