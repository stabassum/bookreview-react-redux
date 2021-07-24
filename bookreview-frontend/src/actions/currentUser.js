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