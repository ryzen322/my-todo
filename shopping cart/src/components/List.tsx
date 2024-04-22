import { useContext } from "react";
import { ContextInter, StoreObj } from "../utilities";
import { StoreContext } from "../context/Context";

const List = ({ id, imgURL, name, price, quantity }: StoreObj) => {
  const { addStore, deleteItem } = useContext(StoreContext) as ContextInter;

  const itemDelete = (id: number) => {
    deleteItem(id);
  };

  return (
    <li className=" h-[12rem] bg-stone-600 rounded-md overflow-hidden p-1 flex gap-1">
      <div className=" h-full w-1/2 bg-blue-600 rounded-md ">
        <img
          className=" w-full h-full object-cover overflow-hidden rounded-md"
          src={imgURL}
          alt=""
        />
      </div>
      <div className=" w-full h-full  p-2 bg-stone-300 flex-1 flex flex-col gap-2 rounded-md">
        <div className=" flex w-full justify-between items-center">
          <h1 className=" font-semibold text-xl">{name}</h1>
          <h1 className=" font-semibold text-lg">{price}</h1>
        </div>
        {/* <div className=" flex gap-1">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            className=" rounded-md px-2 w-16 font-medium outline-none"
          />
        </div> */}
        <div className=" mt-auto flex justify-between">
          <button
            type="button"
            className=" px-2 py-1 bg-blue-500 rounded-md text-sm font-medium"
            onClick={() => addStore({ id, imgURL, name, price, quantity })}
          >
            Add To Cart
          </button>
          <button
            type="button"
            className=" px-2 py-1 bg-blue-500 rounded-md text-sm font-medium"
            onClick={() => itemDelete(id)}
          >
            Remove Cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default List;
