import { Link } from "react-router-dom";
function Bank() {

    return(
        <div className="toSendDiv">
            <select required>
                <option> --Select Bank-- </option>
                <option> Equity Bank </option>
                <option> Family Bank </option>
                <option> KCB Bank </option>
                <option> Post Bank </option>
            </select>
            <input type="number" required placeholder="Enter account number"/>
            <input type="number" required placeholder="Confirm amount"/>
            <Link to = "/Finish">
                <button className="moneyButton"> Deposit </button>
            </Link>
        </div>
    );
}
export default Bank;