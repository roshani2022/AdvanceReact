import React, { useState } from "react";

import ExpenseDetail from "./ExpenseDetail";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //function clickHandler(){}
  const [amount, changeAmount] = useState(props.amount);
  //console.log('ExpenseItem evaluated by React')
  const clickHandler = () => {
    changeAmount("100");
   // console.log(amount);
    
  };

  return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
         <ExpenseDetail
          title={props.title}
          key ={props.id}
          location={props.location}
          amount={amount}
        />              
       <button onClick={clickHandler}>Change Expense</button>
      </Card>

  );
};
export default ExpenseItem;
