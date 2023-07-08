import "./ExpenseItem.css";
function ExpenseItem(props) {
  
  return (
    <div className="Expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="Expense-item_description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="Expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
