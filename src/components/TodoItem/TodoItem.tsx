import "./styles.scss";
import * as React from "react";
import { TodoInterface } from "../TodoApp/TodoApp";
import classNames from "classnames";

export interface TodoItemProps {
  todo: TodoInterface;
  handleChecked(): void;
}

const TodoItem: React.SFC<TodoItemProps> = (props) => {
  const { id, task, time, isChecked } = props.todo;
  const todoItemTask = classNames("TodoItem-task", {
    "TodoItem-task-selected": isChecked,
  });

  return (
    <li className="TodoItem-list">
      <input
        checked={isChecked}
        onChange={props.handleChecked}
        type="checkbox"
      />
      <span className={todoItemTask}>{task}</span>
      <span className="TodoItem-time">{time}</span>
    </li>
  );
};

export default TodoItem;
