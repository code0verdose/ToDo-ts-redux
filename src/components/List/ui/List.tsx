import React from "react";
import { ListItem } from "../../ListItem";
import { useSelector } from "react-redux";
import s from "./List.module.sass";

const List = () => {
  const todos = useSelector((state) => state.todos.todos);

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
