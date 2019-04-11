import React from 'react';
import FriendCard from './FriendCard';
import { NavLink } from 'react-router-dom'

const style={
    color: '#A0001E'
}
class FriendsList extends React.Component {
    
    
    
    
    render() {
        console.log(this.props.friends)
        return (
            <div>
                <NavLink 
                        style={style}
                        activeStyle={{
                        textDecoration: "underline",
                        color: "white",
                        opacity: "1"
                        }}  to ="/addfriend">Add Friend</NavLink>

                {this.props.friends.map(friend => {
                    return <FriendCard friend={friend} />
                })}
            </div>
        )
    }
}


export default FriendsList;
