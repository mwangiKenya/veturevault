import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){

    const [name, setName] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You are loging in as: ${name}`);
        navigate("/Task");
    }
    return(
        <div>
            <form onSubmit={handleSubmit} className="loginForm">
                <p> Welcome back. Login to proceed. </p>
                <input type="text" value={name} placeholder="Email" onChange={(e) => setName(e.target.value)}/>
                <input type="password" placeholder="Password"/>
                <input type="submit" value="Login" />
                <a href="#"> Forgot password? </a>
                <p> Don't have an accout? <a href="#"> Sign up </a></p>
            </form>
        </div>
    );

}
export default Login;