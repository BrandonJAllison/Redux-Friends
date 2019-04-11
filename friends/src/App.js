import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LogIn from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import FriendsList from './Components/FriendsList'
import AddFriends from './Components/AddFriend'
import Logout from './Components/Logout'
import { connect } from 'react-redux';
import Header from './Components/Header'
import logo from './images/logo.png'


class App extends React.Component {
  

  render(){
    return (
      <Router>
        <Header />
        <div className="App">
          
          <h1>Lambda Friends</h1>
          <img src={logo} alt="Logo" />

          <Route path="/login" component={LogIn} /> 
          <Route path="/addfriend" component={AddFriends}/>
          
          <Route path="/logout" component={Logout}/>

          <PrivateRoute 
            path="/friendslist" 
            component={() => <FriendsList friends={this.props.friends} />}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => (
    
  {
    friends: state.friends
  }
);

export default connect (mapStateToProps, {}) (App);

