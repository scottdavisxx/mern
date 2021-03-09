import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

const SignUp = ()=>{

    const history = useHistory();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
         M.toast({html: 'Please enter a valid email address.',classes:'#d50000 red accent-4'})
         return;
        }
        fetch('/signup',{
               method: 'post',
               headers:{
                   "Content-Type":"application/json"
               },
               body:JSON.stringify({
                   name,
                   password,
                   email
               })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    M.toast({html: data.error,classes:'#d50000 red accent-4'})
                } else {
                    M.toast({html: data.message,classes:'#76ff03 light-green accent-3'})
                    history.push('./signin')
                }
            }).catch(err=>{
                console.log(err);
            })
        }

    return(
        <div className="myCard">
            <div className="card authCard input-field">
                <h2>Scottagram</h2>
                <input 
                    type="text" 
                    placeholder="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)} />
                <input 
                    type="text" 
                    placeholder="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                <input 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} />
                <button className="btn waves-effect waves-light blue darken"
                onClick={()=>PostData()}>
                    Sign Up
                </button>
                <h5>
                    <Link to="/signin">Already have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default SignUp