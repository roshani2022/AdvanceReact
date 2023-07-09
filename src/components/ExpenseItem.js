import ExpenseDetail from './ExpenseDetail';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="Expense-item">
      <ExpenseDate date= {props.date}/>
      <div className="Expense-item_description">
      <ExpenseDetail amount={props.amount}  location={props.location}   title={props.title} />
        
      </div>
    </div>
  );
}
export default ExpenseItem;
