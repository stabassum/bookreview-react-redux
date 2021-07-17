export const fetchBooksSuccess = books => {
    return {
        type: "GET_ALL_BOOKS_SUCCESS",
        books
    }
}