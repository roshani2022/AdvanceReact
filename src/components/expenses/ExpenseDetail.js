import React from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseDetail = (props) =>{
    return ( 
      <Card>
       < div className="expense-detail">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      </Card>
    );
}
export default ExpenseDetail;