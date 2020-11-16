const INIT = {
    token: null
}

export function setToken(state = INIT, action) {
    switch(action.type) {
        case 'SET':
            return{
                token : state.token
            }
        default:
            return state
    }
}