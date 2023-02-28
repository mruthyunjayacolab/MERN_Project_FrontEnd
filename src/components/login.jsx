import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {


    let [email, setemail] = useState('');
    let [password, setpassword] = useState('');
    let navigate = useNavigate()


    let loginform = (e) => {

        e.preventDefault()
        let data = { email, password }
        axios.post('http://localhost:3047/login', data)
            .then((res) => {

                if (res.data.message == 'login Seccessful') {
                    navigate("/home")
                }
                else {
                    alert(res.data.message)
                }
            })


    }


    return (

        <div className="login d-flex justify-content-center mt-5">
            <form action="" onSubmit={loginform} className="border col-4 rounded p-2">
                <h1>Login </h1>
                <div className="email form-group col-9 ">
                    <input type="email"
                        className="form-control  mb-4"
                        name="email"
                        value={email} placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                </div>

                <div className="password form-group col-9">
                    <input type="password"
                        className="form-control  mb-4"
                        name="password"
                        value={password} placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div className="login_button">

                    <button className="btn btn-primary">Login</button>

                </div>
                <div className="Sign_In form-outline mb-4">
                    <p> Are you new user?</p>
                    <Link to='/signup' className="btn btn-outline-primary">Sign Up</Link>
                </div>


            </form>
        </div>
    );
}

export default Login;