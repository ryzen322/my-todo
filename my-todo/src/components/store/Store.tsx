import React, { createContext, useReducer } from "react";

export interface layoutPropos {
  children: React.ReactNode;
}

export interface Todo {
  id: number;
  fullName: string;
  todo: string;
  date: number;
  isActive: boolean;
}

export interface Todos {
  todoList: Todo[];
  addTodo: (todo: Todo) => void;
}

type ADD_TODO = { type: "ADD_TODO"; payload: Todo };
type DELETE_TODO = { type: "DELETE_TODO"; payload: string };

type AppActions = ADD_TODO | DELETE_TODO;

export const TodoContext = createContext<Todos | null>(null);

function reducer(state: Todos, action: AppActions): Todos {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
}

const Store: React.FC<layoutPropos> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    todoList: [],
    addTodo: () => {},
  });

  console.log(state);

  const addTodo = (todo: Todo): void => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  return (
    <TodoContext.Provider value={{ todoList: state.todoList, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default Store;