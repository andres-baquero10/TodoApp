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
  isEdting: boolean;
}

const TodoApp: React.SFC<TodoAppProps> = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([
    {
      id: uuidv4(),
      task: "Dance",
      time: "09:00",
      isChecked: false,
      isEdting: false,
    },
  ]);

  const handleNewItem = (task: string, time: string): void => {
    const newTodo = {
      id: uuidv4(),
      task: task,
      time: time,
      isChecked: false,
      isEdting: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const handleChecked = (index: number): void => {
    const tempTodos = [...todos];
    tempTodos[index].isChecked = !tempTodos[index].isChecked;
    setTodos([...tempTodos]);
  };

  const handleDeleteItem = (index: number): void => {
    const tempTodos = [...todos];
    tempTodos.splice(index, 1);
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
                handleDeleteItem={() => handleDeleteItem(index)}
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
