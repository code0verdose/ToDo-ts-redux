import React from "react";
import s from "./ListBottom.module.sass";
import { Button } from "../../Button/ui/Button";
import { removeIsDoneTodo, removeAllTodo } from "../../../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../../../app/global/hooks/hook";

const ListBottom = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.list);

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
