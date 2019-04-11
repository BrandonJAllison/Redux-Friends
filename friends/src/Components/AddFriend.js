import React, { Component } from 'react';

const div = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    
}

const input ={
    margin: '50px 15px',
    border: 'none',
    borderBottom: '2px solid #A0001E',
    height: '20px',
    width: '200px'
}

const button ={
    width: '200px',
    borderRadius: '15px',
    border: '2px solid #A0001E',
    padding: '20px',
    background: 'white',
    margin: '20px 0',
    boxShadow: '0px 2px 4px black'
}

class AddFriends extends Component{
    constructor(props){
        super(props);
        this.state = {
            friends: {
                name: "",
                age: "",
                email: ""
            }
        }
    }

    handleChange = event => {
        this.setState({
          friends: {
            ...this.state.friends,
            [event.target.name]: event.target.value
          }
        });
      };

    addFriend = event => {
        event.preventDefault();
        this.props.addFriendsToServer(this.state.friends);
        alert("Friend Added")
        this.setState({
            friends: {
                name: "",
                age: "",
                email: ""
            }
            
        });
    }


    render(){
        return(
            <div >
                <p>Here you can add friends to the list, just enter the information and click the submit button!</p>
                <form style={div} onSubmit={this.addFriend}>
                    <input style={input} type="text" name="name" required='required' placeholder="Name" value={this.state.friends.name} onChange={this.handleChange} />
                    <input style={input} type="number" name="age" required='required' placeholder="Age" value={this.state.friends.age} onChange={this.handleChange}/>
                    <input style={input} type="email"  name="email" placeholder="Email" required='required' value={this.state.friends.email} onChange={this.handleChange}/>
                    <button style={button} type="submit" value="Submit" >Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFriends;