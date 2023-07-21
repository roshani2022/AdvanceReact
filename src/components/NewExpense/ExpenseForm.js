import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setentredTitle] = useState("");
  const [enteredLocation, setentredLocation] = useState("");
  const [enteredAmount, setentredAmount] = useState("");
  const [enteredeDate, setentrredDate] = useState("");

  const titleChangeHandler = (event) => {
    setentredTitle(event.target.value)
    
  };
  const locationChangeHandler = (event) => {
    setentredLocation(event.target.value)
    console.log(event.target.value)
  };

  const amountChangeHandler = (event) => {
    setentredAmount(event.target.value);   
  };

  const dateChangeHandler = (event) => {
    setentrredDate(event.target.value); 
  };
   const submitHandler = (event) => {
     event.preventDefault();
     
     const expenseData = {
      title: enteredTitle,
      location:enteredLocation,
      amount: enteredAmount,
      date:new Date(enteredeDate),
      id: Math.random().toString()
     }
     props.onSaveExpenseData(expenseData);
     setentredTitle('')
     setentredLocation('')
     setentredAmount('')
     setentrredDate('')
     
   }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title </label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Expense Location </label>
          <input type="text" value={enteredLocation} onChange={locationChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredeDate}
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
