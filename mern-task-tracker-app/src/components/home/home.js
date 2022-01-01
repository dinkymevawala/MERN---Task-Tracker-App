import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Home = (props) => {

    const history = useHistory();
    var i = 1;

    /** Fetch data */
    const [taskDetails, setTaskDetails] = useState([])
    const getTask = () => {
        axios.get("http://localhost:5000/task").then(res => {
            console.log(res.data.task);
            setTaskDetails(res.data.task)
        });
    }
    useEffect(() => getTask(), [])


    const [task, setTask] = useState({
        title: "",
        desc: ""
    })
    /** Handle Change Event */
    const changeHandle = (e) => {
        const { name, value } = e.target
        setTask({
            ...task,
            [name]: value
        })
    }

    /** Add task */
    const addTask = (e) => {
        const { title, desc } = task
        if (title && desc) {
            axios.post("http://localhost:5000/task", task)
                .then(res => {
                    alert(res.data.message);
                    setTask({
                        title: "",
                        desc: ""
                    })
                    getTask()
                    history.push("/");
                })
        } else {
            alert("All fields are mandatory! Please fill all input.")
        }
    }

    const logout = (e) => {
        props.setUser({})
    }


    return (
        <div className='container'>
            {console.log(taskDetails)}
            <h1 className="display-3 text-center mt-5">Task Tracker App</h1>
            <hr />
            <button className='btn btn-block btn-warning' onClick={logout}>Logout</button>
            <hr />
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <div className="row">
                        <div className="col-12">

                            <div className="form-group">
                                <label htmlFor="">Title of task :</label>
                                <input type="text" className="form-control" value={task.title} name="title" id="title" onChange={changeHandle} placeholder='Enter title of task' aria-describedby="helpId" />
                                <small id="helpId" className="text-muted">E.g.: Go to GYM</small>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="">Description of task :</label>
                                <textarea className="form-control" value={task.desc} name="desc" id="desc" onChange={changeHandle} placeholder='Enter description of task' aria-describedby="helpId">
                                </textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-12">
                            <button className='btn btn-success' onClick={addTask}>+ Add Task</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 text-center">
                    <h1 className='text-center'>Task details</h1>
                    <table className="table table-striped table-inverse table-bordered" >
                        <thead className="thead-inverse">
                            <tr>
                                <th>#</th>
                                <th>Task</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot className="thead-inverse">
                            <tr>
                                <th>#</th>
                                <th>Task</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>

                            {
                                taskDetails.map(item => (
                                    <tr>
                                        <td key={item._id}>{i++}</td>
                                        <td key={item.title}>{item.title}</td>
                                        <td key={item.desc}>{item.desc}</td>
                                        <td>
                                            <button key="Delete" className='btn btn-danger'>DELETE</button>
                                            &nbsp;
                                            <button className='btn btn-info'>UPDATE</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Home