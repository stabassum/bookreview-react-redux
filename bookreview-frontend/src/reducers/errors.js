export default (state = false, action) => {

    switch (action.type) {
        case 'ERROR':
            return true
        default:
            return state;
    }

}