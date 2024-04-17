import React from "react";
import Form, { FormTodo } from "./Form";
import Modal from "./modal/Modal";

const Portal: React.FC<FormTodo> = ({
  id,
  date,
  fullName,
  isActive,
  todo,
  todoForm,
  setTodoForm,
  typAction,
}) => {
  return (
    <Modal>
      <div className=" w-full h-full absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className=" w-[35rem] p-2 rounded-md bg-stone-600">
          <Form
            fullName={fullName}
            id={id}
            todo={todo}
            isActive={isActive}
            date={date}
            setTodoForm={setTodoForm}
            todoForm={todoForm}
            typAction={typAction}
          />
        </div>
      </div>
    </Modal>
  );
};

export default Portal;
