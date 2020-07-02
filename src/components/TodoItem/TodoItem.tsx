import "./styles.scss";
import * as React from "react";
import { TodoInterface } from "../TodoApp/TodoApp";
import classNames from "classnames";
import deleteIcon from "../../assets/DeleteIcon.svg";

export interface TodoItemProps {
  todo: TodoInterface;
  handleChecked(): void;
  handleDeleteItem(): void;
  handleToggle(): void;
  handleEditTask(index: number, value: string): void;
  index: number;
}

const TodoItem: React.SFC<TodoItemProps> = (props) => {
  const { id, task, time, isChecked, isEdting } = props.todo;
  const {
    handleChecked,
    handleDeleteItem,
    handleToggle,
    handleEditTask,
    index,
  } = props;
  const todoItemTask = classNames("TodoItem-task", {
    "TodoItem-task-selected": isChecked,
  });

  const handleOnChangeEditInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleEditTask(index, e.target.value);
  };

  return (
    <li className="TodoItem-list">
      <input
        checked={isChecked}
        onChange={handleChecked}
        type="checkbox"
        className="TodoItem-checkBox"
      />
      {isEdting ? (
        <input
          autoFocus
          value={task}
          onBlur={handleToggle}
          type="text"
          className={todoItemTask}
          onChange={handleOnChangeEditInput}
        />
      ) : (
        <span onClick={handleToggle} className={todoItemTask}>
          {task}
        </span>
      )}

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
