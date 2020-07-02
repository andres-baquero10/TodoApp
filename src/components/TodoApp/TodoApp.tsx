import "./styles.scss";

import * as React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../TodoItem/TodoItem";
export interface TodoAppProps {}

export interface TodoInterface {
  id: string;
  task: string;
  time: string;
  isChecked: boolean;
}

const TodoApp: React.SFC<TodoAppProps> = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([
    {
      id: uuidv4(),
      task: "Dance",
      time: "09:00",
      isChecked: false,
    },
  ]);

  const handleNewItem = (task: string, time: string): void => {
    const newTodo = {
      id: uuidv4(),
      task: task,
      time: time,
      isChecked: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const handleChecked = (index: number) => {
    const tempTodos = [...todos];
    tempTodos[index].isChecked = !tempTodos[index].isChecked;
    setTodos([...tempTodos]);
  };

  return (
    <div className="TodoApp-container">
      <Header handleNewItem={handleNewItem} todos={todos} />
      <div className="TodoApp-noteContainer">
        {todos.length ? (
          <ul className="TodoApp-todoList">
            {todos.map((todo, index) => (
              <TodoItem
                handleChecked={() => handleChecked(index)}
                key={todo.id}
                todo={todo}
              />
            ))}
          </ul>
        ) : (
          <span className="TodoApp-noTodos">
            There are no pending task, lets add one
          </span>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
