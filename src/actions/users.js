import api from "../api";
import {userLoggedIn} from './auth';

// defining our thunk function that is a function that returns another function.
// All api requests are stored in one object - it gets too large then should be
// split.  api.user.login will return a promise. we get back the res - results
// from the promise and expect the res.data.user Signup
export const signup = credentials => dispatch => api
    .user
    .signup(credentials)
    .then(user => {
        console.log("Add to local storage", user.token)
        localStorage.UserJWT = user.token;
        dispatch(userLoggedIn(user))
    });
