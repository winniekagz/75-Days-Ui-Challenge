import MyForm from "./userOnboarding/forms/Form";

export default function ProfileCard() {
  return (
    <div className=" flex justify-center items-center w-full px-12 py-56">
      <div className="p-2 grid grid-cols-1 md:grid-cols-5 gap-2  flex-1 w-2/3 rounded shadow">
      <div className="flex items-center justify-start gap-4 col-span-2">
  <img
    className="object-cover rounded-full h-32 w-32"
    src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
    alt="card"
  />
  <MyForm/>

</div>


        <div className="col-span-3">
          <div className="flex justify-end text-end">
          
          </div>
        </div>
      </div>
    </div>
  );
}
