import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux'

function Login(props)
{
var history = useHistory();
var [error, setError] = useState(null);
var user = {}
/*useEffect(()=>{
    console.log("I am in use effect");
})*/

function handleEmail(event)
{
    user.email = event.target.value
}
function handlePass(event)
{
    user.pass = event.target.value
}
function login(event)
{
    event.preventDefault();  
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!user.email || !user.pass)
    {
        setError("All fields are required");
    }
    else if(!re.test(String(user.email).toLowerCase()))
    {
        setError("Invalid email format");
    }
    else
    {
        alert("success");
        props.dispatch({
            type:"STORE_SAMPLE",
            payload:user
          })
        history.push('/')
    }
}
    return(
        <div>
           <h3>Login</h3>
           <div className="d-flex justify-content-center">
           <form>
               <span style={{"color":"red"}}>{error}</span>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={handlePass}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={login}>Submit</button>
            </form>
            </div>
        </div>
    )
}
export default connect()(Login)