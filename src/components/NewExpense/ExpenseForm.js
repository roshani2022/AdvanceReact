import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setentredTitle] = useState("");
  const [enteredAmount, setentredAmount] = useState("");
  const [enteredeDate, setentrredDate] = useState("");

  const titleChangeHandler = (event) => {
    setentredTitle(event.target.value)
    
  };

  const amountChangeHandler = (event) => {
    setentredAmount(event.target.value);
    
    console.log(event.target.value)
  };

  const dateChangeHandler = (event) => {
    setentrredDate(event.target.value);
  
  };
   const submitHandler = (event) => {
     event.preventDefault();
     const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date:new Date(enteredeDate)
     }
     
     console.log(expenseData)
   }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title </label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
