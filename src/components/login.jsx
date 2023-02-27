import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {


    let [email, setemail] = useState('');
    let [password, setpassword] = useState('');


    let handleSubmit=()=>{

    }


    return (

        <div className="login">

            <h1>Login </h1>

            <form action="">
                <div className="email">
                    <input type="email"
                        className="form-control"
                        name="email"
                        value={email} onChange={(e)=>setemail(e.target.value)} />
                </div>

                <div className="password">
                    <input type="password"
                        className="form-control"
                        name="password"
                        value={password} onChange={(e)=>setpassword(e.target.value)} />
                </div>
                <div className="login_button">

                    <button className="btn btn-primary">Login</button>

                </div>
                <div className="Sign In">
                    <p> Are you new user?</p>
                    <Link  to='/signup' className="btn btn-outline-primary">Sign Up</Link>
                </div>


            </form>
        </div>
    );
}

export default Login;