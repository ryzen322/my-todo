import React, { useState } from "react";
import { Todo, Todos } from "./store/Store";

export interface FormTodo extends Todo, Todos {
  todoForm: boolean;
  setTodoForm: React.Dispatch<React.SetStateAction<boolean>>;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  typAction: string;
}

const Form: React.FC<FormTodo> = ({
  id,
  fullName,
  todo,
  date,
  isActive,
  todoForm,
  setTodoForm,
  addTodo,
  typAction,
  updateTodo,
}) => {
  const [formData, setFormData] = useState<Todo>({
    id: id || Math.random() * 99,
    fullName: fullName || "",
    todo: todo || "",
    date: date || 0,
    isActive: isActive || false,
  });
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value, name } = e.currentTarget;

    const { fullName, todo } = formData;
    if (fullName.length + 0 >= 5 && todo.length + 0 >= 5) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }

    setFormData((prev: Todo) => ({
      ...prev,
      [name]: name === "isActive" ? !formData.isActive : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typAction === "add_todo") {
      addTodo(formData);
    }

    if (typAction === "update_todo") {
      setTodoForm(!todoForm);
      updateTodo(formData);
    }
    setFormData({
      id: Math.random() * 99,
      fullName: "",
      todo: "",
      date: 0,
      isActive: false,
    });
  };

  function closeForm(): void {
    setTodoForm(!todoForm);
  }

  return (
    <form onSubmit={handleSubmit} className=" w-full flex flex-col gap-2">
      <div className=" flex gap-4 items-center">
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className=" outline-none bg-inherit text-stone-400 font-semibold "
          value={formData.fullName}
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
          value={formData.todo}
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
          value={formData.date}
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
      <div className=" flex gap-2">
        <button
          type="submit"
          className={` text-blue-300 ${
            btnDisabled ? "cursor-no-drop" : "cursor-pointer"
          }`}
          disabled={btnDisabled}
        >
          {typAction === "add_todo" ? "Submit" : "Update"}
        </button>

        <button type="button" onClick={closeForm}>
          Close
        </button>
      </div>
    </form>
  );
};

export default Form;
