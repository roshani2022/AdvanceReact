//import logo from './logo.svg';
//import './App.css';
import ExpenseItem  from './components/ExpenseItem.js'; 

function App() {
  const expense = [
    {title:'Car Insurance',locationOfExpenditure:'Delhi',amount:294.67,date:new Date(2023,7,7)},
    {title:'Food',locationOfExpenditure:'Noida',amount:500, date:new Date(2022,7,5)},
    {title:'Petrol',locationOfExpenditure:'Delhi',amount:1000,date:new Date(2021,7,4)},
    {title:'Movie',locationOfExpenditure:'Noida',amount:600, date:new Date(2022,7,6)},

];
  return (
    <div>
       <h2> Let's get started! </h2>
      {/*

      
        <ExpenseItem title={expense[0].title}  location ={expense[0].locationOfExpenditure} amount = {expense[0].amount} date = {expense[0].date}></ExpenseItem>
        <ExpenseItem title={expense[1].title}  location ={expense[1].locationOfExpenditure} amount = {expense[1].amount} date = {expense[1].date}></ExpenseItem>       
        <ExpenseItem title={expense[2].title}  location ={expense[2].locationOfExpenditure} amount = {expense[2].amount} date = {expense[2].date}></ExpenseItem>
        <ExpenseItem title={expense[3].title}  location ={expense[3].locationOfExpenditure} amount = {expense[3].amount} date = {expense[3].date}></ExpenseItem>
      */}
      {expense.map((item)=>{
         return  <ExpenseItem title={item.title} location = {item.locationOfExpenditure} amount = {item.amount} date = {item.date}
          />
        })}

    </div>
  );
}

export default App;
