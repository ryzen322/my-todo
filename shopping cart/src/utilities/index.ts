export interface StoreObj {
  id: number;
  name: string;
  price: number;
  imgURL: string;
  quantity: number;
}

export type ADD_STORE = { type: "ADD_STORE"; payload: StoreObj };
export type DELETE_STORE = { type: "DELETE_STORE"; payload: number };
export type UPDATE_STORE = { type: "UPDATE_STORE"; payload: StoreObj };
export type INCREASE_PRICE = { type: "INCREASE_PRICE"; payload: number };

export type StoreActions =
  | ADD_STORE
  | DELETE_STORE
  | UPDATE_STORE
  | INCREASE_PRICE;

export interface ContextInter {
  store: StoreObj[];
  addStore: (item: StoreObj) => void;
}
