import { useReducer } from "react";
import { StoreActions, StoreObj } from "../utilities";

export interface ContextInter {
  store: StoreObj[];
  addStore: (item: StoreObj) => void;
}

function reducer(state: ContextInter, action: StoreActions): ContextInter {
  if (action.type === "ADD_STORE") {
    const newItem = action.payload;

    const existingItemIndex = state.store.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      const updateStore = [...state.store];

      const latestStore = updateStore.map((value) =>
        value.id === newItem.id
          ? {
              ...value,
              quantity: value.quantity + 1,
              price: value.price * value.quantity,
            }
          : value
      );

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
    return state;
  }
  if (action.type === "DELETE_STORE") {
    return state;
  }
  if (action.type === "INCREASE_PRICE") {
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

  console.log(store);
  return {
    addStore,
    store,
  };
};

export default useContextStore;
