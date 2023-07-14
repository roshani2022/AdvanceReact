import React from "react";

import ExpenseDetail from "./ExpenseDetail";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetail
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
    </Card>
  );
};
export default ExpenseItem;
