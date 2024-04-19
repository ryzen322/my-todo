import { useState } from "react";
import storeItems from "../data//items.json";
import { StoreObj } from "../utilities";
import List from "../components/List";

const Store = () => {
  const [data, setData] = useState<StoreObj[]>(storeItems);

  return (
    <div className=" container mx-auto w-full px-1 py-2">
      <h1 className=" text-xl font-bold text-stone-600">Store</h1>
      <ul className=" grid grid-cols-1 gap-2">
        {data.map((item) => (
          <List
            key={item.id}
            id={item.id}
            imgURL={item.imgURL}
            name={item.name}
            price={item.price}
            quantity={1}
          />
        ))}
      </ul>
    </div>
  );
};

export default Store;
