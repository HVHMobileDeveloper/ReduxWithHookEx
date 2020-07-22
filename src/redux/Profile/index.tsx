// Action Types

export const SAVE_PROFILE = 'save_profile'
export const REMOVE_PROFILE = 'remove_profile'

// Actions <= dispath
export const saveProfileToRedux = (user = initState) => {
    return {
        type: SAVE_PROFILE,
        user
    }
}

export const removeProfileFromRedux = () => {
    return {
        type: REMOVE_PROFILE,
    }
}

// Reducer ((= progress to save state
const initState = {
    email:'',
    password: '',
}

type Action= {type: 'save_profile', user: User } | {type: 'remove_profile' }
interface User {
    email: string,
    password: string
}
const ReducerProfile = (state: User = initState, action : Action) => {
    // console.log(`Action: ${JSON.stringify(action)} - state:${JSON.stringify(state)}`)
    switch (action.type) {
        case SAVE_PROFILE:
            state = action.user
            return state;
        case REMOVE_PROFILE:
            state = initState;
            return state;
        default:
            return state
    }
}

export default ReducerProfile
