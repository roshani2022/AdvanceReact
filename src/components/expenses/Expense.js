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

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent=  filteredExpenses.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      location={item.location}
      amount={item.amount}
      date={item.date}
    />
  ));
  
  if (filteredExpenses.length === 0) { 
    expenseContent = <p>No Expense Found</p>
  }


  if (filteredExpenses.length === 1) { 
    expenseContent = filteredExpenses.map((item) => (
      <div>
         <ExpenseItem
        key={item.id}
        title={item.title}
        location={item.location}
        amount={item.amount}
        date={item.date}
      />
      <p>Only single Expense here. Please add more...</p>;
      </div>  
    ))  
  }
    
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {filteredExpenses.length === 1 ? (
        
        <p>Only single Expense here. Please add more...</p>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            location={item.location}
            amount={item.amount}
            date={item.date}
          />
        ))
      )} */}
      {expenseContent}
    </Card>
  );
};
export default Expense;
