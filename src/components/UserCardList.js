import React from 'react';
import UserCard from './UserCard';

const UserCardList = (props) => {
  return (
    <div className='userCardList'>
        {props.users.map((user, i) => {
                return <UserCard key={user + i} user={user} />
            }
        )} 
    </div>
  )
}

export default UserCardList