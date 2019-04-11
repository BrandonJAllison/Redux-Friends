import React from 'react';
import { connect } from 'react-redux';
import { login, fetchFriends } from '../Actions';
import {Loader} from 'react-loader-spinner'

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
                    <input
                        type="text"
                        name="username"
                        required='required'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="username..."
                    />

                    <input
                        type="password"
                        name="password"
                        required='required'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="password..."
                    />
                    <button>SUBMIT</button>
                    {this.props.loggingIn ? (
                            <Loader type="Circles" color="blue" height={100} width={100}/>
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
