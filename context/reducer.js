const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_ORIGIN':
            return {
                ...state,
                origin: action.payload
            }
        default:
            return state
    }
}

export default reducer