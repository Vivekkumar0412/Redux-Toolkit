import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountByIdQuery,
  useGetAccountsQuery,
  useUpdateAccountMutation
} from "../api/adminApi";

function Admin() {
  const { data, error, isLoading } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();  
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation()
  // const {data,error,isLoading} = useGetAccountByIdQuery(2)
  console.log(data);
  console.log(error,"errorerrorerrorerror");
  return (
    <div className="bg-black flex justify-center items-center flex-col gap-3 mt-5 w-[40%]">
      <div className="text-center text-green font-bold text-white text-4xl">
        Admin :
        {data &&
          data.map((e) => (
            <div>
              <h2 key={e.id}>
                {e.id} : {e.amount}
              </h2>{" "}
              <button
                className="bg-red-400 p-2 rounded-md"
                onClick={() => {
                  console.log(e.id);
                  deleteAccount(Number(e.id));
                }}
              >
                Delete
              </button>
              <button className="bg-green-700 text-white" onClick={()=> updateAccount({id : Number(e.id), amount : 777})}>Update</button>
            </div>
          ))}
      </div>
      <button
        className="bg-red-400 m-5 p-4 text-2xl text-white rounded-md"
        onClick={() => addAccount({ id: Number(data.length + 1), amount: 58 })}
      >
        Add Account
      </button>
      {/* <div className="text-center text-green font-bold text-white text-4xl">
        Admin :{" "}
        {isLoading
          ? "Loading....."
          : data && data.amount
          ? data.amount
          : "Error"}
      </div> */}
    </div>
  );
}

export default Admin;
