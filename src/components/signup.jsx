import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    let navigate = useNavigate()
    let [name, setname] = useState('');
    let [email, setemail] = useState('');
    let [mobile, setmobile] = useState('');
    let [password, setpassword] = useState('');
    let [confirm_password, setconfirm_password] = useState('');

    let signUP = (e) => {
        e.preventDefault()
        let data = { name, mobile, email, password, confirm_password }
        console.log(data);

        if (name && email && (password == confirm_password)) {
            axios.post('http://localhost:3047/signup', data)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/')
                    console.log(data);
                })
        }
        else {
            alert("invalid Crediantiional")

        }

    }


    return (
        <div className="sinup bg-primary-light d-flex justify-content-center  rounded">
            <div className=" ms-1" >


                <div className="signUp_form  form-outline border border-primary p-3 m-2 rounded">
                    <h1>SignUp</h1>
                    <form action="" onSubmit={signUP} className="form-outline">
                        <div className="name form-group ">
                            <input type="text"
                                className="form-control mb-2"
                                placeholder="Name"
                                value={name} onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div className="mobile form-group  mb-2">
                            <input type="mobile" placeholder="mobile" className="form-control " value={mobile} onChange={(e) => setmobile(e.target.value)} />
                        </div>
                        <div className="email form-group  mb-2">
                            <input type="email" placeholder="Email" className="form-control " value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="password form-group  mb-2">
                            <input type="password" placeholder="Password" className="form-control" value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>

                        <div className="confirm_password form-group  mb-2">
                            <input type="password" placeholder=" ConformPassword" className="form-control" value={confirm_password} onChange={(e) => setconfirm_password(e.target.value)} />
                        </div>
                        <div className="signUp_button">
                            <button className="btn btn btn-primary btn-floating mx-1 w-100">Register</button>
                            <p>Already a user?</p>
                            <Link to='/login' className="btn btn-primary btn-floating mx-1">Log In</Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Signup;