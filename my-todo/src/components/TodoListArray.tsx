import React, { useState } from "react";
import { Todo } from "./store/Store";
import Portal from "./Portal";

const TodoListArray: React.FC<Todo> = ({
  fullName,
  date,
  todo,
  isActive,
  id,
}) => {
  const [displayPorta, setDisplayPortal] = useState(false);

  return (
    <>
      <li
        key={id}
        className=" min-h-[4rem] w-full bg-stone-700 rounded-md flex items-center gap-3 px-3 py-2 cursor-pointer"
        onClick={() => setDisplayPortal(true)}
      >
        <div
          className={`h-[1rem] w-[1rem] bg-stone-100 ${
            isActive ? "bg-stone-400" : "bg-stone-600"
          } rounded-full`}
        />
        <div className=" flex flex-col justify-center h-full text-stone-400 font-semibold">
          <p className=" text-sm">{date}</p>
          <p>{todo}</p>
        </div>
        <div className=" flex-1  flex justify-end text-stone-300 text-sm">
          {fullName}
        </div>
      </li>

      {displayPorta && (
        <Portal
          fullName={fullName}
          id={id}
          todo={todo}
          isActive={isActive}
          date={date}
          todoForm={displayPorta}
          setTodoForm={setDisplayPortal}
          typAction="update_todo"
        />
      )}
    </>
  );
};

export default TodoListArray;
