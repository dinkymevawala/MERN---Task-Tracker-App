import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './login.css'

const Login = (props) => {

    const history = useHistory();
    const [loginUser, setLoginUser] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setLoginUser({
            ...loginUser,
            [name]:value
        })
    }

    /** user Login */
    const userLogin = (e) => {
        const {email,password} = loginUser
        if(email && password){
            axios.post("http://localhost:5000/login",loginUser)
            .then(res => {
                alert(res.data.message)
                props.setUser(res.data.user)
                history.push("/")
            })
        } else {
            alert("All fields are mandatory! Please fill all input.")
        }
    }

    /** user Registration page redirection */
    const userRegistration = (e) => {
        history.push("/register");
    }

    return (
        <div className='container'>
            <h1 className='display-5 mt-5 text-center font-weight-bolder'>User Login</h1>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <input type="email" value={loginUser.email} onChange={handleChange} name="email" id="email" className="form-control" placeholder="Enter email ID" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">E.g.: burmaaamir@gmail.com</small>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <input type="password" value={loginUser.password} onChange={handleChange} name="password" id="password" className="form-control" placeholder="Enter password" aria-describedby="helpId2" />
                        <small id="helpId2" className="text-muted">E.g.: XXXXXXX</small>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <button className='btn btn-success btn-block' onClick={userLogin}>Login</button>
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
                        <button className='btn btn-secondary btn-block' onClick={userRegistration}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
