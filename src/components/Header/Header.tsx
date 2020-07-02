import "./styles.scss";

import * as React from "react";
import moment from "moment";
import { TodoInterface } from "../TodoApp/TodoApp";
import Form from "../Form/Form";

export interface HeaderProps {
  todos: TodoInterface[];
  handleNewItem(task: string, time: string): void;
}

const Header: React.SFC<HeaderProps> = (props) => {
  const { todos } = props;
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
            <span className="Header-taskSpan">{todos.length}</span>
            {todos.length === 1 ? " Task" : " Task"}
          </p>
        </div>
        <span className="Header-monthSpan"> {moment().format("MMMM")}</span>
      </div>
      <Form handleNewItem={props.handleNewItem} />
    </div>
  );
};

export default Header;
