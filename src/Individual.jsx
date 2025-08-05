import { Link } from "react-router-dom";
function Individual() {

    return(
        <form className="loginForm" autoComplete="off">
            <input type="text" placeholder="First Name" required/>
            <input type="text" placeholder="Last Name" required/>
            <input type="email" placeholder="Email Address" required/>
            <input type="text" placeholder="Phone Number" required/>
            <input type="number" placeholder="ID Number" required/>
            <input type="password" placeholder="Create Password" required/>
            <input type="submit" value="Register"/>
        </form>
    );

}
export default Individual