import { Link } from "react-router-dom";

function Deposit() {

    return(
        <div>
            <h1> Select the category and amount to deposit </h1>
            <div className="depositHolderDiv">
                <div className="depositSubDiv">
                    <h1> Grade A </h1>
                    <p> Deposit Ksh.150 and earn an interest of Ksh.45 daily </p>
                    <Link to = "/Send">
                        <button className="toDeposit"> Deposit now </button>
                    </Link>
                </div>
                <div className="depositSubDiv">
                    <h1> Grade B </h1>
                    <p> Deposit Ksh.200 and earn an interest of Ksh.65 daily </p>
                    <Link to = "/Send">
                        <button className="toDeposit"> Deposit now </button>
                    </Link>
                </div>
                <div className="depositSubDiv">
                    <h1> Grade C </h1>
                    <p> Deposit Ksh.300 and earn Ksh.84 daily </p>
                    <Link to = "/Send">
                        <button className="toDeposit"> Deposit now </button>
                    </Link>
                </div>
                <div className="depositSubDiv">
                    <h1> Grade E </h1>
                    <p> Deposit Ksh.500 and earn an interest of Ksh.99 daily </p>
                    <Link to = "/Send">
                        <button className="toDeposit"> Deposit now </button>
                    </Link>
                </div>
                <div className="depositSubDiv">
                    <h1> Grade F </h1>
                    <p> Deposit Ksh.1000 and earn an interest of Ksh.150 daily </p>
                    <Link to = "/Send">
                        <button className="toDeposit"> Deposit now </button>
                    </Link>
                </div>
                <div className="depositSubDiv">
                    <h1> More offers </h1>
                    <p> Also you can select the amount to deposit based on your interest. </p>
                    <Link to = "/Send">
                        <button className="toDeposit"> Select now </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Deposit;