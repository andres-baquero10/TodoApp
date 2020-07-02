import "./styles.scss";

import * as React from "react";
import moment from "moment";
import { TodoInterface } from "../TodoApp/TodoApp";
import Form from "../Form/Form";

export interface HeaderProps {
  todos: TodoInterface[];
  handleNewItem(task: string, time: string): void;
  getDoneTodos(): void;
}

const Header: React.SFC<HeaderProps> = (props) => {
  const { todos, getDoneTodos, handleNewItem } = props;
  return (
    <div className="Header-container">
      <div className="Header-dateContainer">
        <div className="Header-dateTaskContainer">
          <p className="Header-date">
            <span className="Header-dayWeekSpan">
              {moment().format("dddd")},
            </span>{" "}
            {moment().format("do")}
          </p>
          <p className="Header-tasks">
            Tasks{" "}
            <span className="Header-taskSpan">
              {getDoneTodos() + " / " + todos.length}
            </span>
          </p>
        </div>
        <span className="Header-monthSpan"> {moment().format("MMMM")}</span>
      </div>
      <Form handleNewItem={handleNewItem} />
    </div>
  );
};

export default Header;
