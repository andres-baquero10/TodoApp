import "./styles.scss";

import * as React from "react";
import { useState } from "react";
import classNames from "classnames";
export interface FormProps {
  handleNewItem(task: string, time: string): void;
}

const Form: React.SFC<FormProps> = (props) => {
  const [task, setTask] = useState<string>("");
  const [time, setTime] = useState<string>("09:00");
  const [isVisible, setVisibility] = useState<boolean>(true);

  const handleFormVisibilitty = (): void => {
    setVisibility(!isVisible);
  };

  const handleOnChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const handleOnChangeInputTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const resetState = (): void => {
    setTask("");
    setTime("09:00");
    setVisibility(!isVisible);
  };

  const formContainer = classNames("Form-container", {
    "Form-container-noBorder": isVisible,
  });
  return (
    <div className={formContainer}>
      <form
        className="Form-todoForm"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleNewItem(task, time);
          resetState();
        }}
        hidden={isVisible}
      >
        <label className="Form-textLabel">
          <span className="Form-labelTextSpan">Add Task</span>
          <input
            onChange={handleOnChangeInputText}
            value={task}
            type="text"
            className="Form-inputText"
          />
        </label>
        <label className="Form-timeLabel">
          <span className="Form-labelTimeSpan">Due</span>
          <input
            onChange={handleOnChangeInputTime}
            value={time}
            className="Form-inputTime"
            type="time"
          />
        </label>
        <input value="Add Task" className="Form-subit" type="submit" />
      </form>
      <button onClick={handleFormVisibilitty} className="Form-displayButton">
        {!isVisible ? "-" : "+"}
      </button>
    </div>
  );
};

export default Form;
