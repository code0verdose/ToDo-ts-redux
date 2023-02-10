import React from "react";
import { ListItem } from "../../ListItem";
import s from "./List.module.sass";
import { useAppSelector } from "../../../app/global/hooks/hook";

const List = () => {
  const todos = useAppSelector((state) => state.todos.list);

  if (!todos.length) return null;

  return (
    <ul className={s.List}>
      {todos.map((todo) => (
        <ListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export { List };
