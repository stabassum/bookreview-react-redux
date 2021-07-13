// synchronour actions creators

export const updateSignupForm = formData => {
    return {
        type: "UPDATE_SIGUP_FORM",
        formData
    }
}

export const resetSignupForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}