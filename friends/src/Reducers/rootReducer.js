import {
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_FRIENDS,
    FETCH_COMPLETE,
    FETCH_FAILURE,
    ADD_FRIEND,
    FRIEND_ADDED,
    DELETING_FRIEND,
    FRIEND_DELETED
   

} from '../Actions';

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGING_IN:
            return {
                ...state,
                error: '',
                loggingIn: true
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                loggingIn: false,
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loggingIn: false
            }

        case FETCH_FRIENDS:
            return {
                ...state,
                error: '',
                fetchingFriends: true
            }

        case FETCH_COMPLETE:
            return {
                ...state,
                error: '',
                fetchingFriends: false,
                friends: action.payload
            }

        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingFriends: false,
                
            }

        case ADD_FRIEND:
            return {
                ...state,
                savingFriends: !state.savingFriends
            }

        case FRIEND_ADDED:
            return {
                ...state,
                friends: action.payload
            }

          case DELETING_FRIEND:
            console.log("deleting frd");
            
          case FRIEND_DELETED:
          return {
            ...state,
            friends: action.payload
        }
           

    default: return state;    
    }
    
}

export default rootReducer;
