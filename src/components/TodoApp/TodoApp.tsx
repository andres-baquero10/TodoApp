import "./styles.scss";

import * as React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../TodoItem/TodoItem";
import moment from "moment";

export interface TodoAppProps {}

export interface TodoInterface {
  id: string;
  task: string;
  time: Date;
  isChecked: boolean;
  isEdting: boolean;
}

const TodoApp: React.SFC<TodoAppProps> = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([
    {
      id: uuidv4(),
      task: "Dance",
      time: new Date(),
      isChecked: false,
      isEdting: false,
    },
  ]);

  const handleNewItem = (task: string, time: string): void => {
    const hours = time.slice(0, 2);
    const minutes = time.slice(3, 6);
    const date = new Date();
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    const tempTodos = [...todos];
    const newTodo = {
      id: uuidv4(),
      task: task,
      time: date,
      isChecked: false,
      isEdting: false,
    };

    tempTodos.push(newTodo);
    tempTodos.sort((date1: TodoInterface, date2: TodoInterface) => {
      if (date1.time > date2.time) return 1;
      if (date1.time < date2.time) return -1;
      return 0;
    });

    setTodos([...tempTodos]);
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

  const handleToggle = (index: number): void => {
    const tempTodos = [...todos];
    tempTodos[index].isEdting = !tempTodos[index].isEdting;
    setTodos([...tempTodos]);
  };

  const handleEditTask = (index: number, value: string): void => {
    const tempTodos = [...todos];
    tempTodos[index].task = value;
    setTodos([...tempTodos]);
  };

  const getDoneTodos = (): number => {
    const tempTodos = [...todos];
    const checkedItems = tempTodos.filter((todo) => todo.isChecked);
    return checkedItems.length;
  };

  return (
    <div className="TodoApp-appContainer">
      <div className="TodoApp-container">
        <Header
          getDoneTodos={getDoneTodos}
          handleNewItem={handleNewItem}
          todos={todos}
        />
        <div className="TodoApp-noteContainer">
          {todos.length ? (
            <ul className="TodoApp-todoList">
              {todos.map((todo, index) => (
                <TodoItem
                  handleChecked={() => handleChecked(index)}
                  handleDeleteItem={() => handleDeleteItem(index)}
                  handleToggle={() => handleToggle(index)}
                  handleEditTask={handleEditTask}
                  key={todo.id}
                  todo={todo}
                  index={index}
                />
              ))}
            </ul>
          ) : (
            <span className="TodoApp-noTodos">
              There are no pending tasks, lets add one
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
