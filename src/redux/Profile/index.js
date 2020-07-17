// Action Types

export const SAVE_PROFILE = 'save_profile'
export const REMOVE_PROFILE = 'remove_profile'

// Actions <= dispath
export const saveProfileToRedux = (value = initState) => {
    return {
        type: SAVE_PROFILE,
        value
    }
}

export const removeProfileFromRedux = (value = initState) => {
    return {
        type: REMOVE_PROFILE,
        value
    }
}

// Reducer ((= progress to save state
const initState = {
    email:'',
    password: '',
}
const ReducerProfile = (state = initState, action) => {
    // console.log(`Action: ${JSON.stringify(action)} - state:${JSON.stringify(state)}`)
    switch (action.type) {
        case SAVE_PROFILE:
            state = action.value
            return state;
        case REMOVE_PROFILE:
            state = initState;
            return state;
        default:
            return state
    }
}

export default ReducerProfile
