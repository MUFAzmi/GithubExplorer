import React from 'react'
import {Link} from 'react-router-dom'

 const UserItem = (props) =>
  {

        const {login,avatar_url,html_url}=props.user;
        return (
            <div className="card text-center">
               <img src={avatar_url} alt="" className="round-img" 
               style={{width:'60px'}}></img>
               <h3> {login}</h3>
               <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        )
    
}

export default UserItem
