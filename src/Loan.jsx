import { Link } from "react-router-dom";

function Loan() {

    return(
        <div className="toSendDiv">
            <input type="number" required placeholder="ID Number"/>
            <input type="number" required placeholder="Amout"/>
            <input type="password" required placeholder="Enter pin"/>
            <Link to = "/Done">
                <button className="moneyButton"> Request loan </button>
            </Link>
        </div>
    );
}
export default Loan;