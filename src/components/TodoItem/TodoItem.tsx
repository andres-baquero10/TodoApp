import "./styles.scss";
import * as React from "react";
import { TodoInterface } from "../TodoApp/TodoApp";
import classNames from "classnames";
import deleteIcon from "../../assets/DeleteIcon.svg";

export interface TodoItemProps {
  todo: TodoInterface;
  handleChecked(): void;
  handleDeleteItem(): void;
}

const TodoItem: React.SFC<TodoItemProps> = (props) => {
  const { id, task, time, isChecked } = props.todo;
  const { handleChecked, handleDeleteItem } = props;
  const todoItemTask = classNames("TodoItem-task", {
    "TodoItem-task-selected": isChecked,
  });

  return (
    <li className="TodoItem-list">
      <input
        checked={isChecked}
        onChange={handleChecked}
        type="checkbox"
        className="TodoItem-checkBox"
      />
      <span className={todoItemTask}>{task}</span>
      {isChecked ? (
        <img
          alt="Delete Icon"
          src={deleteIcon}
          className="TodoItem-deleteIcon"
          onClick={handleDeleteItem}
        />
      ) : (
        <span className="TodoItem-time">{time}</span>
      )}
    </li>
  );
};

export default TodoItem;
