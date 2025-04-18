import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";
import Reward from "./components/Reward";
import Admin from "./components/Admin";

function App() {
  const amount = useSelector((state)=> state.account.amount)
  const bonus = useSelector((state)=> state.bonus.points)
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex gap-9">
          <h1 className="text-red-500 text-center font-bold text-4xl">
            Amount :{amount}
          </h1>
          <h1 className="text-blue-500 text-center font-bold text-4xl">
            Bonus :{bonus}
          </h1>
        </div>
        <Account />
        <Bonus />
        <Reward/>
        <Admin/>
      </div>
    </>
  );
}

export default App;
