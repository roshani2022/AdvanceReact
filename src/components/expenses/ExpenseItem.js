import React from "react";

import ExpenseDetail from "./ExpenseDetail";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //function clickHandler(){}
  const clickHandler = () => {
    const removeExpenseItem = document.getElementById(props.id);
    removeExpenseItem.remove();
  };

  return (
    <div id={props.id}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetail
          title={props.title}
          location={props.location}
          amount={props.amount}
        />
        <button onClick={clickHandler}>Delete Expense</button>
      </Card>
    </div>
  );
};
export default ExpenseItem;
