const insState = {
    loading: false,
    data: [],
    error: '',
    search: ''
}

const AnimeReducer = (state = insState, action) => {
    switch (action.type) {
        case 'DATA_REQ':
            return {
                ...state,
                loading: true
            }
        case 'DATA_RES':
            return {
                loading: false,
                data: action.payload
            }
        case 'ERROR':
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default AnimeReducer;