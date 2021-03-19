import React,{useEffect, useState, useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'

const UserProfile = ()=>{
    const [userProfile,setProfile] = useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()
    console.log(userid)
    useEffect(()=>{
       fetch(`/user/${userid}`,{
           headers:{
               "Authorization":"Bearer " +localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
        console.log(result)
        setProfile(result)
       })
    },[])
    return(
      <>
      {userProfile ? 
        <div style={{maxWidth: '1400px', margin: '0 auto',}}>
        <div style={{display: 'flex', 
                     justifyContent: 'space-around',
                     margin: '18px auto',
                     borderBottom: '1px solid gray',
                     maxWidth: '550px',}}>
            <div>
                <img style={{width: '160px', height: '160px', borderRadius: '80px'}}
                src='https://i.imgur.com/z2U2iYx.jpg'></img>
            </div>
            <div>
                <h4>{userProfile.user.name}</h4>
                <h5>{userProfile.user.email}</h5>
                <div style={{display: 'flex',
                             justifyContent: 'space-between',
                             width: '108%',}}>
                    <h6>{userProfile.posts.length}</h6>
                    <h6>50 followers</h6>
                    <h6>60 following</h6>
                </div>
            </div>

        </div>
        <div className='gallery'>
            {
                userProfile.posts.map(item=>{
                    return(
                        <img key={item._id} className='item' src={item.photo} alt={item.title} />
                    )
                })
            }


        </div>
    </div>
      : <h2>loading...</h2>}
        
      </>
    )
}

export default UserProfile