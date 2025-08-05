import { Link } from "react-router-dom";
function Task() {

    return(
        <div className="taskDiv">
            <h1> Select the service to proceed </h1>
            <Link to = "/Withdraw">
                <button className="taskButton"> Withdraw funds </button>
            </Link>
            <Link to = "/Deposit">
                <button className="taskButton"> Deposit funds </button>
            </Link>
            <Link to = "/Loan">
                <button className="taskButton"> Request loan </button>
            </Link>
            <Link to = "/Group">
                <button className="taskButton"> Join group </button>
            </Link>
        </div>
    );
}
export default Task;