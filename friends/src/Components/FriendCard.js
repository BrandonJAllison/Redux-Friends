import React from 'react';
import './Components.css';



const mainDiv ={
    display: 'flex',
    justifyContent: 'center',
    

}

const FriendCard = props => {

    return (
        <div style={mainDiv}>
        <div 
            className={'card-1'}
            key={props.friend.id}>
            <h2>Name: {props.friend.name}</h2>
            <h3>Age: {props.friend.age}</h3>
            <h3>E-mail: {props.friend.email}</h3>
            <button><i class="far fa-trash-alt"></i></button>
        </div>
        </div>
    )

}

export default FriendCard;
