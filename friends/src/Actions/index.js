import axios from 'axios';

export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const FETCH_FRIENDS = "FETCH_FRIENDS";
export const FETCH_COMPLETE = "FETCH_COMPLETE";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_FRIEND ="ADD_FRIEND";
export const FRIEND_ADDED ="FRIEND_ADDED";
export const FRIEND_DELETED = "FRIEND_DELETED";



export const login = creds => dispatch => {
    console.log("action call, LOGGING_IN")
    dispatch({ type: LOGGING_IN});
    return axios
        .post("http://localhost:5000/api/login", creds)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload});
            getData();     
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAILURE, payload: err})
        })
}

export const getData = () => {
    axios
        .get("http://localhost:5000/api/login", {
            headers: { Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

export const fetchFriends = () => dispatch => {
    console.log("action call, FETCH")
    dispatch({ type: FETCH_FRIENDS});
    return axios
        .get("http://localhost:5000/api/friends", { headers: { Authorization: localStorage.getItem('token')}})
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_COMPLETE, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err})
        })
}

export const addFriend = friend => dispatch => {
    console.log("action call, POST");
    dispatch({ type: ADD_FRIEND });
    axios
      .post('http://localhost:5000/api/friends', friend, { headers: { Authorization: localStorage.getItem('token')}})
      .then(response => {
        console.log("ADD FRIEND", response);
        dispatch({ type: FRIEND_ADDED, payload: response.data });
      })
      .catch(err => ({ err }));
  };
  
  
  export const deleteFriend = id => dispatch => {
    console.log("action call, DELETE");
    axios
    .delete(`http://localhost:5000/api/friends/${id}`, { headers: { Authorization: localStorage.getItem('token')}})
    .then(response => {
        console.log("DELETED FRIEND");
        dispatch({ type: FRIEND_DELETED, payload: response.data });
      })
      .catch(err => {
        dispatch({ err });
      });
  };
  