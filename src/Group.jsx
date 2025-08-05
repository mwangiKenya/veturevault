import { Link } from "react-router-dom";

function Group() {

    return(
        <div className="loginForm">
            <input type="text" required placeholder="Group name"/>
            <input type="text" required placeholder="Admin name"/>
            <input type="number" required placeholder="Members"/>
            <input type="number" required placeholder="Admin ID"/>
            <Link to = "/Done">
                <button className="moneyButton"> Submit request </button>
            </Link>
        </div>
    );
}
export default Group;