import Home from "./Home";
import { Routes, Route, Link, HashRouter } from 'react-router-dom';
import Question from "./Question";
import Contact from "./Contact";
import Terms from "./Terms";
import Account from "./Account";
import Login from "./Login";
import Individual from "./Individual";
import Task from "./Task";
import Deposit from "./Deposit";
import Send from "./Send";
import Mpesa from "./Mpesa";
import Bank from "./Bank";
import Finish from "./Finish";
import Withdraw from "./Withdraw";
import Loan from "./Loan";
import Done from "./Done";
import Group from "./Group";

function App() {
  return (
    <>
        <nav className="myNav">
          <Link to = "/" className="myLink"> Home </Link>
          <Link to = "/Contact"  className="myLink"> Contact us </Link>
          <Link to = "/Question"  className="myLink"> Frequently Asked Questions </Link>
          <Link to = "/Terms"className="myLink"> Terms and Conditions </Link>
          <div className="dropdown">
               <span className="dropdown-title">Open Account ▾</span>
              <div className="dropdown-content">
                    <Link to="/Group"> Group Account </Link>
                    <Link to="/Individual"> Individual Account</Link>
              </div>
          </div>
          <Link to = "/Login" className="myLink"> Sign in </Link>
        </nav>

        <Routes>
          <Route path="/" element = {<Home/>}/> 
          <Route path="/Contact" element = {<Contact/>}/>
          <Route path="/Question" element = {<Question/>}/>
          <Route path="Terms" element = {<Terms/>}/>
          <Route path="Account" element = {<Account/>}/>
          <Route path="Login" element = {<Login/>}/>
          <Route path="Individual" element = {<Individual/>}/>
          <Route path="Task" element = {<Task/>}/>
          <Route path="Deposit" element = {<Deposit/>}/>
          <Route path="Send" element = {<Send/>}/>
          <Route path="Mpesa" element = {<Mpesa/>}/>
          <Route path="Bank" element = {<Bank/>}/>
          <Route path="Finish" element = {<Finish/>}/>
          <Route path="Withdraw" element = {<Withdraw/>}/>
          <Route path="Loan" element = {<Loan/>}/>
          <Route path="Done" element = {<Done/>}/>
          <Route path="Group" element = {<Group/>}/>
        </Routes>
    </>
  );
}

export default App;
