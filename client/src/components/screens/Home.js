import React,{useState} from 'react'

const Home = ()=>{
    const [data,setData] = useState([]);
    
    return(
        <div className='home'>
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
        </div>
    )
}

export default Home