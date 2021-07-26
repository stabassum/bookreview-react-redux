const initialState = {
    books: [],
    currentUser: "",
    userBooks: [],
    bookOwnerships: [],
    isLoading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }
        case "GET_ALL_BOOKS_SUCCESS":
            return {
                ...state,
                books: action.books,
                isLoading: false
            }
        case "GET_BOOK_OWNERSHIPS_SUCCESS":
            return {
                ...state,
                bookOwnerships: action.bookOwnerships,
            }
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.user,
            }
        case "GET_USER_BOOKS_SUCCESS":
            let myBooks = actions.user.books.map(t => {
                t.claimed = "true"
                return t
            })
            return { ...state, 
                userBooks: myBooks
            }
        case "MARK_AS_CLAIMED":
            let newArray = [...state.books];
            let userToys = [...state.userBooks]

            newArray.forEach( t => {
                t.claimed = "false"
                userBooks.map(toy => {
                    if(t.id === book.id){
                        t.claimed = "true";
                    }
                })
            })
            
            return {
                ...state,
                books: newArray,
            }
        
        case "ADD_BOOK_OWNERSHIP_SUCCESS":
            let newBook = action.book
            newBook.claimed = "true"
            let newList = [...state.books]

            newList.forEach(t => {
                if(t.id === newBook.id) {
                    t.claimed = "true"
                    t.users.push(action.user)
                }
            })

            return {
                ...state,
                bookOwnerships: [...state.bookOwnerships, action.bookOwnerships],
                userBooks: [...state.userBooks, newBook],
                books: newList
            }

            case "REMOVE_BOOK_OWNERSHIP_SUCCESS":
                let updateBooks = [...state.books]
                // let updateMyBooks = [...state.userBooks]

                updateBooks.forEach(t => {
                    if (t.id === action.book.id) {
                        t.claimed = "false"
                        t.users.splice(t.users.indexOf(action.user), 1)
                    }
                })

                return {
                    ...state,
                    bookOwnerships: state.bookOwnerships.filter(to => to.id !== action.bookOwnerships.id),
                    userBooks: state.userBooks.filter(t => t.id !== action.book.id),
                    books: updateBooks,
                }

                case "CREATE_BOOK_SUCCESS":
                    return {
                        ...state,
                        books: [...state.books, action.book]
                    }

                default:
                    return state
    }
}