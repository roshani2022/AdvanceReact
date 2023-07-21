import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
const Expense = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          id={item.id}
          title={item.title}
          location={item.location}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};
export default Expense;
