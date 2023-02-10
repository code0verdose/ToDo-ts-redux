import React from "react";
import s from "./ListTop.module.sass";
import { Input } from "../../Input/ui/Input";
import { Button } from "../../Button/ui/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todoSlice";

const ListTop = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    if (value.trim().length) {
      dispatch(addTodo({ value }));
      setValue("");
    }
  };

  return (
    <form onClick={(evt) => evt.preventDefault()} className={s.ListTop}>
      <label>
        <Input value={value} setValue={setValue} />
        <Button
          className={"btn btn__add"}
          text="Добавить"
          handleClick={addTask}
        />
      </label>
    </form>
  );
};

export { ListTop };
