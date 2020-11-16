const INIT = {
    token: null
}

export function setToken(state = INIT, action) {
    console.log(state, action)
    switch(action.type) {
        case 'SET':
            return{
                token : localStorage.getItem('Session')
            }
        default:
            return state
    }
}