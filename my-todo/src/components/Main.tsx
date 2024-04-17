import { useContext, useState } from "react";
import { TodoContext, Todos, Todo } from "./store/Store";

const Main: React.FC = () => {
  const [todoForm, setTodoForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<Todo>({
    id: Math.random() * 99,
    fullName: "",
    todo: "",
    date: 0,
    isActive: false,
  });

  const { addTodo } = useContext(TodoContext) as Todos;
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value, name } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "isActive" ? !formData.isActive : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(formData);
  };

  return (
    <div className=" h-full w-1/2 flex flex-col p-5">
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
        className={` w-full h-auto rounded-md bg-stone-800 mt-5 text-stone-400 font-medium flex items-center px-4  py-4 cursor-pointer`}
      >
        {todoForm && <h1>Add Todo</h1>}
        <form onSubmit={handleSubmit} className=" w-full flex flex-col gap-2">
          <div className=" flex gap-4 items-center">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className=" outline-none bg-inherit text-stone-400 font-semibold "
              onChange={handleChange}
            />
          </div>
          <div className=" flex gap-4 items-center">
            <label htmlFor="name">Todo:</label>
            <input
              type="text"
              name="todo"
              placeholder="Todo Name"
              className=" outline-none bg-inherit text-stone-400 font-semibold "
              onChange={handleChange}
            />
          </div>
          <div className=" flex gap-4 items-center">
            <label htmlFor="name">Date:</label>
            <input
              type="date"
              name="date"
              placeholder="name"
              className=" outline-none bg-inherit text-stone-400 font-semibold "
              onChange={handleChange}
            />
          </div>
          <div className=" flex gap-4 items-center">
            <label htmlFor="name">Active:</label>
            <input
              type="checkbox"
              name="isActive"
              placeholder="checkbox"
              className=" outline-none bg-inherit text-stone-400 font-semibold "
              checked={formData.isActive}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* end of add Todo */}
    </div>
  );
};

export default Main;
