import { Link } from "react-router-dom";

function Mpesa() {

    return(
        <div className="toSendDiv">
            <input type="number" required placeholder="Enter Mpesa number"/>
            <input type="number" required placeholder="Confirm amount"/>
            <Link to = "/Finish">
                <button className="moneyButton"> Deposit </button>
            </Link>
        </div>
    );
}
export default Mpesa;