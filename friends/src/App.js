import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LogIn from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import FriendsList from './Components/FriendsList'
import { connect } from 'react-redux';
import Header from './Components/Header'


class App extends React.Component {
  

  render(){
    return (
      <Router>
        <div className="App">
          
             <Header />
           
          <h1>Friends List</h1>
          
          <Route path="/login" component={LogIn} /> 
          
          <PrivateRoute 
            path="/friendslist" 
            component={() => <FriendsList friends={this.props.friends} />}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect (mapStateToProps, {}) (App);

