import React from 'react'


const UserCard = (props) => {
  return (
    <div>
   
    <div className='userCard-container'>
    <h1>User Card</h1>
    <br />
    <h3 >UserNam:</h3>
    <div className='userName'>{props.user.login}</div>
    <h3>Profile Picture:</h3>
    { <img className='profile-pic' src={props.user.avatar_url} alt="Profile Picture" /> }
    </div>
    </div>
  )
}


export default UserCard
