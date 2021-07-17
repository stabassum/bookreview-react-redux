export const updateBookFormData = bookFormData => {
    return {
        type: 'UPDATED_DATA',
        bookFormData
    }
}

export const resetBookForm = () => {
    return {
        type: 'RESET_BOOK_FORM'
    }
}