import { resetBookForm } from "./bookForm";
import { getBookOwnerships } from "./bookOwnerships";

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
    return dispatch => {
        dispatch({type: 'LOADING'})

        return (
            fetch("http://localhost:3000/books", {
                credentials: "include",
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })
            .then(r => r.json())
            .then(books => {
                dispatch(fetchBooksSuccess(books));
                dispatch(getBookOwnerships());
            })
            .catch(error => {
                console.log("Error: ", error);
            })
        )
    }
}

export const createBook = book => {
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