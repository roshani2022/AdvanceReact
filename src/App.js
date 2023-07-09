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
       {expense.map((item)=>{
        return  <ExpenseItem title={item.title} location = {item.locationOfExpenditure} amount = {item.amount} date = {item.date}
         />
       })}
    </div>
  );
}

export default App;
