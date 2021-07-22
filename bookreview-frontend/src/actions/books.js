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

export const getAllBooks = () => {
    
}

export const createToy = book => {
    return dispatch => {
        return fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(book)
        })
        .then(r => r.json())
        .then(book => {
            dispatch(addBook(book));
            dispatch(resetBookForm());
        })
    }
}