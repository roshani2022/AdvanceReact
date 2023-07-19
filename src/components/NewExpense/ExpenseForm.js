import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enteredTitle, updateentredTitle] = useState("");
  // const [enteredAmount, updateentredAmount] = useState("");
  // const [enteredeDate, updateentrredDate] = useState("");

  const [userInput,setUserInput]= useState({
     enteredTitle:'',
     enteredAmount:'',
     enteredeDate:''
  });
  const titleChangeHandler = (event) => {
    //updateentredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // })
    setUserInput((prevState)=>{
      return{...prevState,enteredTitle:event.target.value}
    })
  };

  const amountChangeHandler = (event) => {
    //updateentredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // })
    setUserInput((prevState)=>{
      return{...prevState,enteredAmount:event.target.value}

    })
    console.log(event.target.value)
  };

  const dateChangeHandler = (event) => {
   // updateentrredDate(event.target.value);
  //  setUserInput({
  //   ...userInput,
  //   enteredeDate:event.target.value
  // })
  setUserInput((prevState)=>{
    return{...prevState,enteredDatet:event.target.value}
  })
  };

  return (
    <form>
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
