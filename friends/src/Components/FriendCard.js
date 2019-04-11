import React from 'react';
import './Components.css';
import { connect } from "react-redux";
import { deleteFriend } from "../Actions";

const icon ={
  color: '#A0001E',
  background: 'white',
  border: 'red' 
}
const mainDiv ={
    display: 'flex',
    justifyContent: 'center',
    
}

class FriendCard extends React.Component{
    constructor(props){
        super(props);

    }

    clickHandle = id => {
        console.log("clicked!");
        this.props.deleteFriend(id);
      };
      
      render(){
        return (
            <div style={mainDiv}>
            <div 
                className={'card-1'}
                key={this.props.friend.id}>
                <h2>Name: {this.props.friend.name}</h2>
                <h3>Age: {this.props.friend.age}</h3>
                <h3>E-mail: {this.props.friend.email}</h3>
                <button style={icon} onClick={() => this.clickHandle(this.props.friend.id)}><i  className="far fa-trash-alt"></i></button>
            </div>
            </div>
        )
      }
   


}

const mapStateToProps = state => (
    
    {
      friends: state.friends
    }
  );
  
  export default connect(
    mapStateToProps,
    {
     
      deleteFriend
    }
  )(FriendCard);


