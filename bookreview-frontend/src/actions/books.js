import { resetBookForm } from "./bookForm";

export const fetchBooksSuccess = books => {
    return {
        type: "GET_ALL_BOOKS_SUCCESS",
        books
    }
}

export const addBook = book => {
    return {
        type: "CREATE_BOOK_SUCCESS",
        book
    }
}