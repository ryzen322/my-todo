import { useReducer } from "react";
import { StoreActions, StoreObj, ContextInter } from "../utilities";

type OperatorType = "ADDTION" | "SUBTRACTION" | "MULTIPLICATION";

const updatedItem = (
  id: number,
  operator: OperatorType,
  item: StoreObj[]
): StoreObj[] => {
  let incrementByValue = 0;

  switch (operator) {
    case "ADDTION":
      incrementByValue = 1;
      break;
    case "SUBTRACTION":
      incrementByValue = -1;
      break;
    default:
      incrementByValue;
  }

  const latestStore = item.map((value) =>
    value.id === id
      ? {
          ...value,
          quantity: value.quantity + incrementByValue,
          price: value.price * value.quantity,
        }
      : value
  );

  return latestStore;
};

function reducer(state: ContextInter, action: StoreActions): ContextInter {
  if (action.type === "ADD_STORE") {
    const newItem = action.payload;

    const existingItemIndex = state.store.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      const updateStore = [...state.store];

      const latestStore = updatedItem(newItem.id, "ADDTION", updateStore);

      return {
        ...state,
        store: latestStore,
      };
    }

    return {
      ...state,
      store: [...state.store, newItem],
    };
  }
  if (action.type === "UPDATE_STORE") {
    const updated = action.payload;

    const updateItem = state.store.map((item) =>
      item.id === updated.id ? updated : item
    );

    return {
      ...state,
      store: updateItem,
    };
  }
  if (action.type === "DELETE_STORE") {
    const id = action.payload;
    console.log(id);

    return state;
  }
  if (action.type === "INCREASE_PRICE") {
    const id = action.payload;
    console.log(id);
    return state;
  }

  return state;
}

const useContextStore = (): ContextInter => {
  const [{ store }, dispatch] = useReducer(reducer, {
    store: [],
    addStore: () => {},
  });

  function addStore(item: StoreObj): void {
    dispatch({ type: "ADD_STORE", payload: item });
  }
  const deleteItem = (id: number) => {
    console.log(id);
  };

  return {
    store,
    addStore,
    deleteItem,
  };
};

export default useContextStore;
