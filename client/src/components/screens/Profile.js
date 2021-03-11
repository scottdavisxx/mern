import React from 'react'

const Profile = ()=>{
    return(
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
                    <h4>Scott Davis</h4>
                    <div style={{display: 'flex',
                                 justifyContent: 'space-between',
                                 width: '108%',}}>
                        <h6>40 posts</h6>
                        <h6>50 followers</h6>
                        <h6>60 following</h6>
                    </div>
                </div>

            </div>

            <div className='gallery'>
                <img className='item' src='https://i.imgur.com/z2U2iYx.jpg' />
                <img className='item' src='https://i.imgur.com/z2U2iYx.jpg' />
                <img className='item' src='https://i.imgur.com/z2U2iYx.jpg' />
                <img className='item' src='https://i.imgur.com/z2U2iYx.jpg' />
                <img className='item' src='https://i.imgur.com/z2U2iYx.jpg' />
                <img className='item' src='https://i.imgur.com/z2U2iYx.jpg' />
                <img className='item' src='https://i.imgur.com/z2U2iYx.jpg' />

            </div>
        </div>
    )
}

export default Profile