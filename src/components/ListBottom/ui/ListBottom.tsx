import React from "react";
import s from "./ListBottom.module.sass";
import { Button } from "../../Button/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeIsDoneTodo, removeAllTodo } from "../../../store/todoSlice";

const ListBottom = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  if (!todos.length) return null;

  return (
    <div className={s.ListBottom}>
      <Button
        handleClick={() => dispatch(removeIsDoneTodo())}
        className={"btn btn__del_done"}
        text="Удалить завершенные"
      />
      <Button
        handleClick={() => dispatch(removeAllTodo())}
        className={"btn btn__del_all"}
        text="Удалить все"
      />
    </div>
  );
};

export { ListBottom };
