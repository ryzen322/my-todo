import { useContext } from "react";
import TodoListArray from "./TodoListArray";
import { TodoContext, Todos } from "./store/Store";

const TodoList = () => {
  const { todoList } = useContext(TodoContext) as Todos;

  return (
    <ul className=" w-full flex flex-col gap-2 mt-3 min-h-[10rem] overflow-scroll no-scrollbar rounded-md">
      {todoList.length <= 0 ? (
        <div
          className=" w-full h-[4rem] bg-slate-600 rounded-md flex justify-center items-center
     text-2xl font-semibold text-stone-400  "
        >
          No Data
        </div>
      ) : (
        todoList.map((item) => (
          <TodoListArray
            key={item.id}
            todo={item.todo}
            fullName={item.fullName}
            date={item.date}
            id={item.id}
            isActive={item.isActive}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
