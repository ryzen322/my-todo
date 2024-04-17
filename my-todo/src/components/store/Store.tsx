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
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
}

type ADD_TODO = { type: "ADD_TODO"; payload: Todo };
type UPDATE_TODO = { type: "UPDATE_TODO"; payload: Todo };
type DELETE_TODO = { type: "DELETE_TODO"; payload: number };

type AppActions = ADD_TODO | DELETE_TODO | UPDATE_TODO;

export const TodoContext = createContext<Todos | null>(null);

function reducer(state: Todos, action: AppActions): Todos {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todoList: [...state.todoList, action.payload],
    };
  }

  if (action.type === "UPDATE_TODO") {
    const updatedList = state.todoList.map((item) =>
      item.id === action.payload.id ? action.payload : item
    );

    return {
      ...state,
      todoList: updatedList,
    };
  }
  if (action.type === "DELETE_TODO") {
    console.log(action.payload);
    const deletedList = state.todoList.filter(
      (item) => item.id !== action.payload
    );

    return {
      ...state,
      todoList: deletedList,
    };
  }

  return state;
}

const Store: React.FC<layoutPropos> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    todoList: [],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
  });

  const addTodo = (todo: Todo): void => {
    console.log("clicked");
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const updateTodo = (todo: Todo): void => {
    dispatch({ type: "UPDATE_TODO", payload: todo });
  };
  const deleteTodo = (id: number): void => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <TodoContext.Provider
      value={{ todoList: state.todoList, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default Store;
