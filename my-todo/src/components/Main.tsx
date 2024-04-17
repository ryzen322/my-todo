import TodoList from "./TodoList";
import Form from "./Form";
import { useContext, useState } from "react";
import { TodoContext, Todos } from "./store/Store";

const Main: React.FC = () => {
  const [todoForm, setTodoForm] = useState<boolean>(true);
  const { addTodo } = useContext(TodoContext) as Todos;

  return (
    <div className=" h-full w-1/2 flex flex-col p-5 transition-all ease-in duration-200">
      <div className=" w-full  flex items-center gap-4">
        <div className=" flex flex-col items-center text-stone-400 font-bold text-2xl">
          <p>Feb</p>
          <p>4</p>
        </div>
        <div className=" flex flex-col">
          <h1 className=" text-stone-200 font-bold text-4xl">Good Afternoon</h1>
          <h1 className=" text-stone-500 font-bold text-3xl">
            What's your plan for today
          </h1>
        </div>
      </div>
      {/* add Todo */}
      <div
        className={` w-full  rounded-md bg-stone-800 mt-5 text-stone-400 font-medium flex items-center px-4  py-4 cursor-pointer`}
      >
        {todoForm && <h1 onClick={() => setTodoForm(!todoForm)}>Add Todo</h1>}
        {!todoForm && (
          <Form
            todoForm={todoForm}
            setTodoForm={setTodoForm}
            addTodo={addTodo}
            typAction="add_todo"
          />
        )}
      </div>

      {/* end of add Todo */}
      {/* display Todo */}
      <TodoList />
    </div>
  );
};

export default Main;
