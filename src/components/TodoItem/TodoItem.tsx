import "./styles.scss";
import * as React from "react";
import { TodoInterface } from "../TodoApp/TodoApp";
import classNames from "classnames";
import deleteIcon from "../../assets/DeleteIcon.svg";
import moment from "moment";

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

  const formateDate = (): string => {
    const timeStringFormat = time.getHours() + ":" + time.getMinutes();
    const timeFormatted = moment
      .utc(timeStringFormat, "HH:mm")
      .format("HH:mm A");
    return timeFormatted;
  };

  return (
    <li className="TodoItem-list">
      <label className="TodoItem-label">
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
        <input
          checked={isChecked}
          onChange={handleChecked}
          type="checkbox"
          className="TodoItem-checkBox"
        />
        <span className="TodoItem-checkSpan"></span>
      </label>
      {isChecked ? (
        <img
          alt="Delete Icon"
          src={deleteIcon}
          className="TodoItem-deleteIcon"
          onClick={handleDeleteItem}
        />
      ) : (
        <span className="TodoItem-time">{formateDate()}</span>
      )}
    </li>
  );
};

export default TodoItem;
