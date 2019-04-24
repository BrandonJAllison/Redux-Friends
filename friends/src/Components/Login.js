import React from 'react';
import { connect } from 'react-redux';
import { login, fetchFriends } from '../Actions';
import {Loader} from 'react-loader-spinner'

const form = {
    margin: '50px 15px',
    border: 'none',
    borderBottom: '2px solid #A0001E',
    height: '20px',
    width: '200px'

}

const button ={
    width: '100px',
    borderRadius: '15px',
    border: '2px solid #A0001E',
    padding: '10px',
    background: 'white',
    margin: '20px 0',
    boxShadow: '0px 2px 4px black'
}


class LogIn extends React.Component{
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    }
    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/friendslist');
            })
            .then(() => {
                this.props.fetchFriends();
            })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.login}>
                    <input style={form}
                        type="text"
                        name="username"
                        required='required'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="username..."
                    />

                    <input style={form}
                        type="password"
                        name="password"
                        required='required'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="password..."
                    />
                    <button style={button}>SUBMIT</button>
                    {this.props.loggingIn ? (
                            <h1>Loggin In</h1>
                        ) : (
                            null
                        )
                    }
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error,
    friends: state.friends 
})

export default connect(mapStateToProps, { login, fetchFriends }) (LogIn);
