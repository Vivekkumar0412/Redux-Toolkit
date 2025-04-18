import { useDispatch, useSelector } from "react-redux";
import {incrementRewardByPoint,incrementReward} from "../reducers/rewardReducer"
function Reward() {
  const reward = useSelector((state)=> state.reward.points)
  const dispatch = useDispatch();


  return (
    <div className="bg-black flex justify-center items-center flex-col gap-3 mt-5 w-[40%]">
      <h1 className="text-center text-green font-bold text-white text-4xl">Reward : {reward}</h1>
      <button className="bg-green-500 p-3 m-2 rounded-md text-2xl font-bold text-white" onClick={()=> dispatch(incrementReward())}>Increase By $10</button>
      <button className="bg-green-500 p-3 m-2 rounded-md text-2xl font-bold text-white" onClick={()=> dispatch(incrementRewardByPoint(1))}>Increase By $1</button>
    </div>
  );
}

export default Reward;
