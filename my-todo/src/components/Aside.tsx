const Aside = () => {
  return (
    <div className=" w-3/12 py-2 px-3 bg-[#252525] flex flex-col items-center">
      <h1 className=" text-white font-semibold text-2xl">My-Todo</h1>
      <div className=" mt-10 flex flex-col  w-full">
        <p className=" text-white font-semibold">My Lists</p>
        <ul className=" flex flex-col gap-1 mt-2">
          <li className=" w-full h-[3rem] bg-stone-400 rounded-md cursor-pointer flex justify-between items-center px-3 text-sm font-bold">
            <p>Live</p>
            <span>X</span>
          </li>
        </ul>
      </div>
      <div className=" mt-5 flex flex-col  w-full">
        <p className=" text-stone-500 font-semibold">My Lists</p>
        <ul className=" flex flex-col gap-1 mt-2">
          <li className=" w-full h-[3rem] rounded-md cursor-pointer flex items-center px-3 text-sm font-bold text-stone-500 hover:bg-black">
            <p>+ New List</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
