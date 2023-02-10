import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Todo = {
  id: string,
  text: string,
  isDone: boolean
}

type TodoState = {
  list: Todo[]
}

const initialState: TodoState = {
  list: []
}


// const savedTodos = JSON.parse(localStorage.getItem("todos")) ?? [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        isDone: false,
      });
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
    removeAllTodo(state) {
      state.list = [];
    },
    removeIsDoneTodo(state) {
      state.list = state.list.filter((todo) => !todo.isDone);
    },
    toggleIsDone(state, action: PayloadAction<string>) {
      const toggledItem = state.list.find(
        (todo) => todo.id === action.payload
      );
      if (toggledItem) {
        toggledItem.isDone = !toggledItem.isDone;
      }
    },
  },
});

export const {
  addTodo,
  removeAllTodo,
  removeIsDoneTodo,
  removeTodo,
  toggleIsDone,
} = todoSlice.actions;

export default todoSlice.reducer;
