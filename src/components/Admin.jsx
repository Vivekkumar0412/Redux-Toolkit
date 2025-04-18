import { useGetAccountsQuery } from "../api/adminApi";

function Admin() {
    const {data,error,isLoading} = useGetAccountsQuery()
  return (
    <div className="bg-black flex justify-center items-center flex-col gap-3 mt-5 w-[40%]">
      <div className="text-center text-green font-bold text-white text-4xl">Admin : {data && data.map((e)=> <h2 key={e.id}>{e.amount}</h2>)}</div>
    </div>
  );
}

export default Admin;
