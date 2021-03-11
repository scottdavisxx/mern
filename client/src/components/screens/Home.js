import React,{useState, useEffect} from 'react'

const Home = ()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer " +localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.posts)
        })
    },[])

    
    return(
        <div className='home'>
            {
                data.map(item=>{
                    return(
                        <div className='card home-card'>
                        <h5>Scott</h5>
                            <div className='card-image'>
                                <img src='https://i.imgur.com/rP6TgQd.jpeg'/>
                            </div>
                            <div className='card-content'>
                                <i className="material-icons" style={{color: 'red'}}>favorite</i>
                                <h6>title</h6>
                                <p>This is an amazing post</p>
                                <input type='text' placeholder='comment'/>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Home