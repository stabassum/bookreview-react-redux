export const setBookOwnerships = (bookOwnerships) => {
    return {
        type: 'GET_BOOK_OWNERSHIPS_SUCCESS',
        bookOwnerships
    }
}

export const setBooksOwnerships = (bookOwnership, user, book) => {
    return {
        type: "ADD_BOOK_OWNERSHIP_SUCCESS",
        bookOwnership,
        user,
        book
    }
}

export const removeToyOwnership = (bookOwnership, user, book) => {
    return {
        type: "REMOVE_BOOK_OWNERSHIP_SUCCESS",
        bookOwnership,
        user,
        book
    }
}

