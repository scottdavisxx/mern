import React,{useState, useContext,} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'
import {UserContext} from '../../App'
 
const SignIn = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory();
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
         M.toast({html: 'Please enter a valid email address.',classes:'#d50000 red accent-4'})
         return;
        }
        fetch('/signin',{
               method: 'post',
               headers:{
                   "Content-Type":"application/json"
               },
               body:JSON.stringify({
                   password,
                   email
               })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.error){
                    M.toast({html: data.error,classes:'#d50000 red accent-4'})
                } else {
                    localStorage.setItem('jwt', data.token)
                    localStorage.setItem('user', JSON.stringify(data.user))
                    dispatch({type:"USER", payload:data.user})
                    M.toast({html:'Success: Signed In',classes:'#76ff03 light-green accent-3'})
                    history.push('./')
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
                    Sign In
                </button>
                <h5>
                    <Link to="/signup">Don't have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default SignIn