//import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Expense from "./components/expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      location: "Delhi",
      amount: 294.67,
      date: new Date(2023, 7, 7),
    },
    {
      id: "e2",
      title: "Food",
      location: "Noida",
      amount: 500,
      date: new Date(2022, 7, 5),
    },
    {
      id: "e3",
      title: "Petrol",
      location: "Delhi",
      amount: 1000,
      date: new Date(2021, 7, 4),
    },
    {
      id: "e4",
      title: "Movie",
      location: "Noida",
      amount: 600,
      date: new Date(2022, 7, 6),
    },
  ];
  const [myExpense, setMyExepnse] = useState(expenses);
  const addExpenseHandler = (expense) => {
   setMyExepnse((prevData)=>{
    return [ ...prevData,expense]
   }
     
)
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={myExpense} />
    </div>
  );
};

export default App;
