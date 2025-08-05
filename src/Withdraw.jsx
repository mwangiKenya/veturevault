function Withdraw() {

    return(
        <div className="toSendDiv">
            <input type="number" required placeholder="Enter your service number"/>
            <input type="number" required placeholder="Enter amount"/>
            <input type="password" required placeholder="Enter your pin"/>
            <button className="moneyButton"> Withdraw </button><br></br>
            <a href="#"> Help </a>
        </div>
    );
}
export default Withdraw;