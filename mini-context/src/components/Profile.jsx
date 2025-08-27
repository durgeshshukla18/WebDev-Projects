import React, {useContext} from 'react'
import UserContext from '../context/UserContext.js'


function Profile() {

    const {user} = useContext(UserContext);


    if(!user) {
        return <div>Please login first</div>
    }

  return (
    <div>Welcome {user.username}!!</div>
  )
}

export default Profile