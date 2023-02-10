import React from "react";
import s from "./ListItem.module.sass";
import clsx from "clsx";
import { Button } from "../../Button/ui/Button";
import { removeTodo, toggleIsDone } from "../../../store/todoSlice";
import { useAppDispatch } from "../../../app/global/hooks/hook";

interface ListItemProps {
  className?: string;
  text: string;
  id: string;
  isDone: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ className, text, id, isDone }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={clsx(s.ListItem, className)}>
      <label>
        <input
          onChange={() => dispatch(toggleIsDone(id))}
          checked={isDone}
          type="checkbox"
        />
        <span>{text}</span>
      </label>
      <Button handleClick={() => dispatch(removeTodo(id))} text="❌" />
    </li>
  );
};

export { ListItem };
