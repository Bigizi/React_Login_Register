import React from "react";
import { Link } from "react-router-dom";
import './register.css';


function Register() {
    return(
        <div>
            <form>
            < div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                <p>By creating an account you agree to our <Link href="#">Terms & Privacy</Link>.</p>

                <button type="submit" className="registerbtn">Register</button>
                </div>
            </form>
            </div>
    )
}

export default Register;