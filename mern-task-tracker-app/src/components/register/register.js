import axios from 'axios'
import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'

const Register = (props) => {

    /** Default blank define */
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        rePassword:"",
    })

    const history = useHistory();
    /** user Login  page redirection*/
    const userLogin = (e) => {
        history.push("/login")
    }
    
    /** User Registration */
    const userRegistration = (e) => {
        /** Define value to constant variable sequancely */
        const {name, email, password, rePassword} = user
        if(name && password && email && rePassword){
            if(password !== rePassword){
                alert("Password and re-type password must be same.")
            } else {
                axios.post("http://localhost:5000/user",user)
                .then(res => {
                    alert(res.data.message);
                    history.push("/login");
                })
            }
        } else {
            alert("All fields are mandatory! Please fill all input.")
        }
        
    }

    /** On Change of text in text box preserve data*/
    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    return (
        <div className='container'>
            <h1 className='display-5 mt-5 text-center font-weight-bolder'>User Registration</h1>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <input type="text" name="name" id="name" onChange={handleChange} className="form-control" placeholder="Enter your name" aria-describedby="helpId3" />
                        <small id="helpId2" className="text-muted">E.g.: Aamirsohel Burma</small>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <input type="email" name="email" id="email" onChange={handleChange} className="form-control" placeholder="Enter email ID" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">E.g.: burmaaamir@gmail.com</small>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <input type="password" name="password" id="password" onChange={handleChange} className="form-control" placeholder="Enter password" aria-describedby="helpId2" />
                        <small id="helpId2" className="text-muted">E.g.: XXXXXXX</small>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <input type="password" name="rePassword" id="rePassword" onChange={handleChange} className="form-control" placeholder="Enter repassword" aria-describedby="helpId4" />
                        <small id="helpId4" className="text-muted">E.g.: XXXXXXX</small>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <button className='btn btn-success btn-block' onClick={userRegistration}>Register</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group text-center">
                        OR
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group text-center">
                        <button className='btn btn-warning btn-block' onClick={userLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
