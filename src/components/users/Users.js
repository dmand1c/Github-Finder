import React, { useContext }from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';


const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

    if(loading) {
        return <Spinner />
    } else {
        return (
//.map to loop thru users, .map takes param that represents each user and with callback function render userItem component for each user
            <div style={userStyle}>
                {users.map( user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
