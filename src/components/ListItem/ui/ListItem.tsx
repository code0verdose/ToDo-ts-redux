import React from "react";
import s from "./ListItem.module.sass";
import clsx from "clsx";
import { Button } from "../../Button/ui/Button";
import { useDispatch } from "react-redux";
import { removeTodo, toggleIsDone } from "../../../store/todoSlice";

const ListItem = ({ className, text, id, isDone }) => {
  const dispatch = useDispatch();

  return (
    <li className={clsx(s.ListItem, className)}>
      <label>
        <input
          onChange={() => dispatch(toggleIsDone({ id }))}
          checked={isDone}
          type="checkbox"
        />
        <span>{text}</span>
      </label>
      <Button handleClick={() => dispatch(removeTodo({ id }))} text="❌" />
    </li>
  );
};

export { ListItem };
