import './ExpenseItem.css'
function ExpenseDetail(props){
    return ( 
        <div>
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="Expense-item_price">${props.amount}</div>
        </div>
    );
}
export default ExpenseDetail;