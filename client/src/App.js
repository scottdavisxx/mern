import React, {useEffect, createContext, useReducer, useContext} from 'react';
import NavBar from './components/navbar';
import "./App.css"
import {BrowserRouter,Route, Switch, useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/Signin'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import {reducer,initalState} from './reducers/userReducer'

 export const UserContext = createContext()

 const Routing = ()=>{
   const history = useHistory()
   const {state,dispatch} = useContext(UserContext);
   useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("USER"));
    if(user){
      dispatch({type:"USER",payload:user})
    } else {
      history.push('/signin')
    }
   },[])
   return(
    <Switch>
    <Route exact path='/'>
    <Home />
    </Route>
    <Route path='/signup'>
      <Signup />
    </Route>
    <Route path='/signin'>
      <Signin />
    </Route>
    <Route path='/profile'>
      <Profile />
    </Route>
    <Route path='/create'>
      <CreatePost />
    </Route>
    </Switch>
   )
 }

function App() {
  const [state, dispatch] = useReducer(reducer, initalState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />

    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
