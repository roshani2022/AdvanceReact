import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
   < div>
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
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
    </div>
  );
};
export default Expense;
