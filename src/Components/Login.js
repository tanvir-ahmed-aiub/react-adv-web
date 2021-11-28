import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Login = ()=>{
    let [token,setToken] = useState("");

    const loginSubmit=()=>{    
        var obj = {username:"tanvir", password:"1234"};
        axios.post("http://localhost:8000/api/login",obj)
        .then(resp=>{
            debugger;
            console.log(resp.data);
            //setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        }); 
    }

    return(
        <div>
            <span></span>
            <button onClick={loginSubmit}>
                Login
            </button>
        </div>
    )

}

export default Login;