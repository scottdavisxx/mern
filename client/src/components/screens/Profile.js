import React,{useEffect, useState, useContext} from 'react'
import {UserContext} from '../../App'

const Profile = ()=>{
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
       fetch('/mypost',{
           headers:{
               "Authorization":"Bearer " +localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
        setPics(result.mypost)
       })
    },[])
    return(
        <div style={{maxWidth: '1400px', margin: '0 auto',}}>
            <div style={{ margin: '18px auto',
                    borderBottom: '1px solid gray',
                    maxWidth: '550px',}}>
                <div style={{display: 'flex', 
                            justifyContent: 'space-around',
                            margin: '18px auto'}}>
                    <div>
                        <img style={{width: '160px', height: '160px', borderRadius: '80px'}}
                        src={state?state.pic:"https://res.cloudinary.com/scottdavisxx/image/upload/v1617075577/ProfileDefault_zmett8.png"}></img>
                    </div>
                    <div>
                        <h4>{state?state.name:"loading..."}</h4>
                        <h5>{state?state.email:"loading..."}</h5>
                        <div style={{display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '108%',}}>
                            <h6>{mypics.length} posts</h6>
                            <h6>{state?state.followers.length:".."} followers</h6>
                            <h6>{state?state.following.length:".."} following</h6>
                        </div>
                    </div>

                </div>
                    <button style={{
                        margin:"0 0 20px 20px"
                    }}className="btn waves-effect waves-light blue darken">
                        Update Profile Pic
                    </button>
                </div>
            <div className='gallery'>
                {
                    mypics.map(item=>{
                        return(
                            <img key={item._id} className='item' src={item.photo} alt={item.title} />
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Profile