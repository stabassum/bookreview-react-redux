export const setBookOwnerships = (bookOwnerships) => {
    return {
        type: 'GET_BOOK_OWNERSHIPS_SUCCESS',
        bookOwnerships
    }
}

export const setBookOwnership = (bookOwnership, user, book) => {
    return {
        type: "ADD_BOOK_OWNERSHIP_SUCCESS",
        bookOwnership,
        user,
        book
    }
}

export const removeBookOwnership = (bookOwnership, user, book) => {
    return {
        type: "REMOVE_BOOK_OWNERSHIP_SUCCESS",
        bookOwnership,
        user,
        book
    }
}

export const getBookOwnerships = () => {

    return dispatch => {
        return fetch("http://localhost:3000/book_ownerships/", {
            credentials: "include",
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
        .then(r => r.json())
        .then(book_ownerships => {
            console.log("book_ownerships", book_ownerships)
            if (book_ownerships.error) {
                alert(book_ownerships.error)
            }
            else {
                dispatch(setBookOwnerships(book_ownerships))
            }
        })
    }

}

export const claimBook = ( book, user ) => {
    const newData = {
       user_id: user.id,
       book_id: book.id
   }
   console.log("newData", newData)

    return dispatch => {  
        return fetch(`http://localhost:3000/book_ownerships/`,
            { 
                credentials: "include",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData)
            })
       
      .then(r => r.json() )
      .then( bookOwnership => {
          dispatch(setBookOwnership(bookOwnership, user, book))            
      })
       
     }
}

export const unclaimBook = ( to, book, user ) => {
    let selectedBookOwnership = to.find(to =>  (to.user_id === user.id && to.book_id === book.id))
    console.log("to.id", selectedBookOwnership.id)
        
    return dispatch => {  

        return fetch(`http://localhost:3000/book_ownerships/${selectedBookOwnership.id}`,
            { 
                credentials: "include",
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            })
       
      .then(r => r.text() )
      .then(bookOwnership => {
          console.log(bookOwnership)
              
        dispatch(removeBookOwnership( selectedBookOwnership, user, book)) 

      })
  
     
    }
}