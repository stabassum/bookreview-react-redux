export const updateLoginForm = formData => {
    return {
        type: "UPDATED_LOGIN_FORM",
        formData
    }
}

export const clearLoginForm = () => {
    return {
        type: "RESET_LOGIN_FORM"
    }
}