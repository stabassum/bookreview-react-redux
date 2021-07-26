import { clearLoginForm } from "../actions/loginForm";
import { resetSignupForm } from "../actions/signupForm";

// Synchronous action creators

export const setCurrentUser = (user, books) => {
    return {
        type: "SET_CURRENT_USER",
        user,
        books
    }
} 

export const setMyBooks = (user, books) => {
    return {
         type: "GET_USER_TOYS_SUCCESS",
         user,
         books
    };
};

export const markAsClaimed = (user, books) => {
    return {
        type: "MARK_AS_CLAIMED",
        user,
        books
    };
};

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    };
}

export const login = credentials => {
 
}

export const logout = () => {
    
}

export const getMyBooks = user => {

}

export const signup = credentials => {

}