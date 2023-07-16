//import logo from './logo.svg';
import React from "react";
//import Card from './components/UI/Card';
import "./App.css";
import Expense from "./components/expenses/Expense";
const App = () => {
  const expenses = [
    {
      id:"e1",
      title: "Car Insurance",
      locationOfExpenditure: "Delhi",
      amount: 294.67,
      date: new Date(2023, 7, 7),
    },
    {
      id:"e2",
      title: "Food",
      locationOfExpenditure: "Noida",
      amount: 500,
      date: new Date(2022, 7, 5),
    },
    {
      id:"e3",
      title: "Petrol",
      locationOfExpenditure: "Delhi",
      amount: 1000,
      date: new Date(2021, 7, 4),
    },
    {
      id:"e4",
      title: "Movie",
      locationOfExpenditure: "Noida",
      amount: 600,
      date: new Date(2022, 7, 6),
    },
  ];
  return (
    <div>
      <h2> Let's get started! </h2>
      <Expense items={expenses} /> 
    </div>
  );
};

export default App;
